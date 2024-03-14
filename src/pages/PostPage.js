import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  let post = posts.find((post) => post.id == id);

  return (
    <section className="flex-1 overflow-y-scroll">
      <div className="container mx-auto ">
        <article className="">
          <h2 className="text-2xl  m-2 mb-5">Full Post:</h2>
          <div className="border p-5 m-2 mb-5 rounded-md shadow bg-[#f9f9f9] flex flex-col">
            <h2 className="text-3xl mb-3 text-[#333]">{post?.title}</h2>
            <p className="text-base my-1 text-[#666]">{post?.datetime}</p>

            <p className="mt-3 text-[#444]">{post?.body}</p>

            <div className="flex justify-center mt-4">
              <button
                className="w-24 px-3 py-2 mr-3 rounded-md border flex justify-center bg-slate-100 shadow-md "
                onClick={() => handleDelete(post?.id)}
              >
                <RiDeleteBinLine className="text-red-500 text-2xl" />
              </button>
              <Link to={`/edit/${post?.id}`}>
                <button className="w-24 px-3 py-2 rounded-md border flex justify-center bg-slate-100 shadow-md">
                  <FaRegEdit className="text-orange-500 text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PostPage;
