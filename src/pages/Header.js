import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header className=" bg-slate-100">
      <div className="container mx-auto p-2 flex justify-between items-center flex-col sm:flex-row">
        <h1 className="font-bold text-2xl mb-2 sm:mb-0">{title}</h1>
        <ul className="flex items-center">
          <Link to="/">
            <li className="px-4 py-1 mr-2 bg-black text-white cursor-pointer hover:bg-white hover:text-black font-semibold">
              Home
            </li>
          </Link>
          <Link to="/post">
            <li className="px-4 py-1 mr-2 bg-black text-white cursor-pointer hover:bg-white hover:text-black font-semibold">
              Post
            </li>
          </Link>
          <Link to="/about">
            <li className="px-4 py-1 bg-black text-white cursor-pointer hover:bg-white hover:text-black font-semibold">
              About
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
