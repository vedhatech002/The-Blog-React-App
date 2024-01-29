import { Link } from "react-router-dom";

export const BlogCard4 = (props) => {
  return (
    <Link
      to={`/blog/${props.id}`}
      className="w-full grid grid-cols-1 gap-4 justify-center"
    >
      <div className="h-40">
        <img className="w-full h-full" src={props.img} alt="blog1"></img>
      </div>
      {/* blog details */}
      <div className=" flex-col justify-start items-start gap-4 inline-flex mt-4 sm:mt-0">
        <div className="self-stretch  flex-col justify-start items-start gap-3 flex">
          <span className="self-stretch text-violet-700 text-xs font-semibold font-['Inter'] leading-tight">
            {props.author} • {props.date_posted}
          </span>

          <h3 className="self-stretch text-zinc-900 text-[1rem] font-semibold font-['Inter'] leading-7">
            {`${props.title}`}
          </h3>
          <p className="self-stretch text-gray-500 text-[0.9rem] font-normal font-['Inter'] leading-normal">
            {props.description}
          </p>
        </div>
        <div className="mt-1">
          <span className="text-center text-sky-700 bg-sky-50 text-sm font-medium font-['Inter'] leading-tight px-2 py-0.5 rounded-full">
            {props.category1}
          </span>
          <span className="text-center text-pink-700  bg-pink-50 text-sm font-medium font-['Inter'] leading-tight px-2 py-0.5 rounded-full">
            {props.category2}
          </span>
        </div>
      </div>
    </Link>
  );
};
