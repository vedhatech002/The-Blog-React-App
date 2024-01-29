import { BlogCard4 } from "./BlogCard4";
import data from "../data/data.json";
console.log(data);
export const AllBlogs = () => {
  return (
    <section className="md:px-16 sm:px-8 px-6 py-24 ">
      <h1 className=" text-zinc-900 text-lg text-left font-semibold font-['Inter'] leading-loose">
        All blog posts
      </h1>

      {/* all blogs container */}

      <div className="grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1   gap-12 mt-6">
        {data.map((obj) => {
          return (
            <BlogCard4
              id={obj.id}
              title={obj.title}
              img={obj.img}
              author={obj.author}
              date_posted={obj.date_posted}
              description={obj.blog.description}
              category1={obj.category[0]}
              category2={obj.category[1]}
            />
          );
        })}
      </div>
    </section>
  );
};
