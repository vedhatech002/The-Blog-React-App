import { useState, useEffect } from "react";
import { DevBlogCard } from "../components/DevBlogCard";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
export const DevsBlog = () => {
  const [devBlogs, setDevBlogs] = useState([]);

  // fetching blog data from server
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch(
        "https://dev.to/api/articles?username=kells"
      );
      const postJson = await fetchedPosts.json();
      console.log(postJson);
      setDevBlogs(postJson);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <section className="px-24 pt-32 pb-12">
        <h1 className="font-['Inter'] font-semibold text-lg">
          DEV'S BLOG FROM API
        </h1>
        <div className="grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1   gap-12 mt-6">
          {devBlogs.map((blogObj) => (
            <DevBlogCard key={blogObj.id} blogData={blogObj} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
