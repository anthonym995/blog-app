import React from "react";
import { Outlet } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


const App = () => {
  return (
    <DataProvider>
      <div className="max-w-[800px] h-screen w-full mx-auto relative flex flex-col shadow-lg">
        <Header title={"Tech Blogs"} />
        <Outlet />
        <Footer />
      </div>
    </DataProvider>
  );
};

export default App;
