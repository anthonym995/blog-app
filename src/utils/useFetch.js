import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      try {
        const res = await axios.get(url);
        setAllBlogs(res.data);
      } catch (err) {
        setError(err.response);
      }
    };

    getData(url);
  }, [url]);

  return [allBlogs, error];
};

export default useFetch;
