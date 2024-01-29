import { Fragment, useState } from "react";
import { Navbar } from "./components/Navbar";
import { RecentBlogs } from "./components/RecentBlogs";
import { AllBlogs } from "./components/AllBlogs";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <RecentBlogs />
      <AllBlogs />
      <Footer />
    </>
  );
}

export default App;
