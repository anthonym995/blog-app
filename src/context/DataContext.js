import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "../utils/api";
import useFetch from "../utils/useFetch";
import { FETCH_URL} from "../utils/constant";

// custom context
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const navigate = useNavigate();

  const [allBlogs,error] = useFetch(FETCH_URL);

  useEffect(() => {
    setPosts(allBlogs);
  }, [allBlogs]);

  useEffect(() => {
    filterPost();
  }, [posts, search]);

  const filterPost = () => {
    let filter = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filter.reverse());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id =
      posts.length !== 0
        ? (Number(posts[posts.length - 1].id) + 1).toString()
        : 1;
    let date = format(new Date(), "MMMM dd, yyyy p");
    let newPost = { id, title: title, datetime: date, body: body };
    try {
      const res = await api.post("/posts", newPost);
      let allPost = [...posts, res.data];
      setPosts(allPost);
      setTitle("");
      setBody("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/posts/${id}`);
      let filterPost = posts.filter((post) => post.id !== id);
      setPosts(filterPost);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (id) => {
    let date = format(new Date(), "MMMM dd, yyyy p");
    let updatePost = { id, title: editTitle, datetime: date, body: editBody };

    try {
      let res = await api.put(`/posts/${id}`, updatePost);

      let updatedPost = posts.map((post) =>
        post.id === id ? { ...res.data } : post
      );
      setPosts(updatedPost)
      navigate("/");
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <DataContext.Provider
      value={{
        posts,
        search,
        setSearch,
        searchResult,
        title,
        setTitle,
        body,
        setBody,
        handleSubmit,
        handleDelete,
        handleEdit,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        handleEdit,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
