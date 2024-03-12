import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import Shimmer from "./component/Shimmer";
import CreatePost from "./pages/CreatePost";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post",
        element: <CreatePost />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
      {
        path: "/edit/:id",
        element: <EditPost />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shimmer",
        element: <Shimmer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
