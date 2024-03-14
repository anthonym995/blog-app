import { useContext } from "react";
import DataContext from "../context/DataContext";
import PostCard from "./PostCard";
import Shimmer from "../component/Shimmer";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const { posts, searchResult, search, setSearch } = useContext(DataContext);

  return posts?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <nav className="py-3 sticky top-0">
        <div className="container mx-auto px-5">
          <form
            className="rounded-full px-2 py-1 border border-black flex mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="absolute left-[-9999]" htmlFor="search">
              Nothing
            </label>
            <input
              className="w-full outline-none border-none bg-transparent px-2"
              type="text"
              id="search"
              placeholder="Search post"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="w-12 flex justify-center items-center border-l-2 border-black ">
              <FaSearch />
            </div>
          </form>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto top-58">
        <div className="container mx-auto">
          {searchResult?.length === 0
            ? "No Result Found for your search"
            : searchResult?.map((post) => {
                return <PostCard post={post} key={post.id} />;
              })}
        </div>
      </main>
    </>
  );
};

export default Home;
