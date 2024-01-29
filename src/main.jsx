import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./routes/Home";
// import Blogs from "./routes/Blogs";
// import FullBlog from "./routes/FullBlog";
import App from "./App";
import { BlogPage } from "./pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  // {
  //   path: "/blogs",
  //   element: <Blogs />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/blog/:id",
    element: <BlogPage />,
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
