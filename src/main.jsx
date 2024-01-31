import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./routes/Home";
// import Blogs from "./routes/Blogs";
// import FullBlog from "./routes/FullBlog";
import App from "./App";
import { BlogPage } from "./pages/BlogPage";
import { DevsBlog } from "/src/pages/DevsBlog.jsx";
import { ReadBlog } from "./pages/ReadBlog";

console.log(DevsBlog);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,
    // errorElement: <App />,
  },
  {
    path: "/devblog/:slug",
    element: <ReadBlog />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/blog/:id",
    element: <BlogPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/devblog",
    element: <DevsBlog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
