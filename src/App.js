import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Nav from "./pages/Nav";
import Body from "./pages/Body";

const App = () => {
  return (
    <div className="max-w-[800px] h-screen w-full mx-auto relative flex flex-col">
      <Header title={"Tech Blogs"} />
      <Nav />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
