import { BlogPost } from "../components/BlogPost";
import { Footer } from "../components/Footer";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const BlogPage = () => {
  const { id } = useParams();
  const selectedBlog = data.find((blog) => {
    return blog.id == id;
  });
  console.log(selectedBlog);
  return (
    <>
      <Link
        to={`/home`}
        className="absolute top-6 md:left-10 sm:right-10 right-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="38"
          width="38"
          id="back"
        >
          <g data-name="Layer 2">
            <g data-name="E421, Back, buttons, multimedia, play, stop">
              <path d="M256,512A256,256,0,0,1,75,75,256,256,0,0,1,437,437,254.33,254.33,0,0,1,256,512Zm0-492C125.87,20,20,125.87,20,256S125.87,492,256,492,492,386.13,492,256,386.13,20,256,20Z"></path>
              <path d="M352.26,266H170.43a10,10,0,0,1,0-20H352.26a10,10,0,0,1,0,20Z"></path>
              <path d="M223.91,319.48a10,10,0,0,1-7.07-2.93l-53.48-53.48a10,10,0,0,1,0-14.14l53.48-53.48A10,10,0,1,1,231,209.59L184.58,256,231,302.41a10,10,0,0,1-7.07,17.07Z"></path>
            </g>
          </g>
        </svg>
      </Link>
      <main className="xl:mx-[15rem] lg:mx-[10rem] md:mx-[6rem] sm:mx-[4rem] mx-[2rem] mt-8 flex flex-col gap-6">
        <span className="self-stretch text-violet-700 text-xs font-semibold font-['Inter'] leading-tight">
          {selectedBlog.author} • {selectedBlog.date_posted}
        </span>
        <h3 className="self-stretch text-zinc-900 lg:text-4xl md:text-3xl  sm:text-2xl text-xl font-semibold font-['Inter'] leading-10">
          {`${selectedBlog.title}`}
        </h3>
        <div>
          <img
            className="w-full xl:h-full h-fit"
            src={selectedBlog.img}
            alt="blog1"
          ></img>
        </div>
        <BlogPost sections={selectedBlog.blog.sections} />
      </main>
      <Footer />
    </>
  );
};
