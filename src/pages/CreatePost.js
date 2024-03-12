import { useContext } from "react";
import DataContext from "../context/DataContext";

const CreatePost = () => {
  const { title, setTitle, body, setBody, handleSubmit } =
    useContext(DataContext);

  return (
    <section className="flex-1">
      <div className="container mx-auto w">
        <h2 className="text-2xl mt-3 mb-4 text-center">Create Post</h2>

        <form
          className="flex flex-col border p-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="post-title" className="mb-3">
            Title:
          </label>

          <input
            type="text"
            id="post-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border mb-4 rounded-md px-3 py-1"
          />

          <label htmlFor="post-body" className="mb-3">
            Body:
          </label>

          <textarea
            text="text"
            id="post-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mb-4 border rounded-md px-3 py-1"
          />

          <button
            type="submit"
            className="px-3 py-2 bg-blue-500 rounded-md text-white text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
