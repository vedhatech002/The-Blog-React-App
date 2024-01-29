export const BlogCard2 = () => {
  return (
    <a className="w-full grid grid-cols-1 sm:grid-cols-2 xl:gap-2 sm:gap-4 justify-center">
      <div>
        <img
          className="w-full xl:h-full h-fit"
          src="/blog2.png"
          alt="blog1"
        ></img>
      </div>
      {/* blog details */}
      <div className=" flex-col justify-start items-start gap-4 inline-flex mt-4 sm:mt-0">
        <div className="self-stretch  flex-col justify-start items-start gap-3 flex">
          <span className="self-stretch text-violet-700 text-xs font-semibold font-['Inter'] leading-tight">
            Phoenix Baker • 1 Jan 2023
          </span>

          <h3 className="self-stretch text-zinc-900 text-[1rem] font-semibold font-['Inter'] leading-7">
            Migrating to Linear 101
          </h3>
          <p className="self-stretch text-gray-500 text-[0.9rem] font-normal font-['Inter'] leading-normal">
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. Here’s how to get...
          </p>
        </div>
        <div className="mt-1">
          <span className="text-center text-sky-700 bg-sky-50 text-sm font-medium font-['Inter'] leading-tight px-2 py-0.5 rounded-full">
            Design
          </span>
          <span className="text-center text-pink-700  bg-pink-50 text-sm font-medium font-['Inter'] leading-tight px-2 py-0.5 rounded-full">
            Research
          </span>
        </div>
      </div>
    </a>
  );
};
