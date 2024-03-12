import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <article className="border p-5 m-2 mb-5 rounded-md shadow bg-[#f9f9f9] flex flex-col">
      <Link to={`/post/${post.id}`} className="cursor-pointer">
        <h2 className="text-xl mb-3 text-[#333] ">{post.title}</h2>
      </Link>
      <p className="text-base my-1 text-[#666]">{post.datetime}</p>
      <p className="mt-3 text-[#444]">
        {post.body.lenght <= 80 ? post.body : post.body.slice(0, 80) + "..."}
      </p>
    </article>
  );
};

export default PostCard;
