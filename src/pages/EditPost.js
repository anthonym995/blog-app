import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const {
    posts,
    editTitle,
    setEditTitle,
    editBody,
    setEditBody,
    handleEdit,
  } = useContext(DataContext);
  const { id } = useParams();
  let post = posts.find((post) => post.id === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post]);

  return (
    <section className="flex-1">
      <div className="container mx-auto">
        <h2 className="text-2xl mt-3 mb-4 text-center">Edit Post</h2>

        <form
          className="flex flex-col border p-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="post-title" className="mb-3">
            Title:
          </label>

          <input
            type="text"
            id="post-title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border mb-4 rounded-md px-3 py-1"
          />

          <label htmlFor="post-body" className="mb-3">
            Body:
          </label>

          <textarea
            text="text"
            id="post-body"
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            className="mb-4 border rounded-md px-3 py-1"
          />

          <button
            type="submit"
            onClick={()=>handleEdit(post?.id)}
            className="px-3 py-2 bg-blue-500 rounded-md text-white text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
