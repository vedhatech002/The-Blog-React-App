import { BlogCard } from "./BlogCard";
import { BlogCard2 } from "./BlogCard2";
import { BlogCard3 } from "./BlogCard3";

export const RecentBlogs = () => {
  return (
    <section className="md:px-16 sm:px-8 px-6 pt-24 ">
      <h1 className=" text-zinc-900 text-lg text-left font-semibold font-['Inter'] leading-loose">
        Recent blog posts
      </h1>

      <div className="grid xl:grid-cols-[1.2fr,1fr] md:grid-cols-1 gap-6 mt-4">
        <div>
          <BlogCard></BlogCard>
        </div>
        <div className="grid grid-cols-1  gap-4">
          <BlogCard2></BlogCard2>
          <BlogCard2></BlogCard2>
        </div>
      </div>
      <div className="mt-16">
        <BlogCard3 />
      </div>
    </section>
  );
};
