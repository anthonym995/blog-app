import { useState } from "react";

const Nav = () => {

  const [search, setSearch] = useState();
  return (
    <nav className="p-3 bg-purple-300">
      <div className="container mx-auto">
        <form onSubmit={(e) => e.preventDefault}>
          <label htmlFor="search"></label>
          <input type="text" id="search" value={}/>
        </form>
      </div>,
    </nav>
  );
};

export default Nav;