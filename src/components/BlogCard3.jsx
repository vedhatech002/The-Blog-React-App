export const BlogCard3 = () => {
  return (
    <a className="w-full grid xl:grid-cols-[1.2fr,1fr] grid-cols-1 gap-4 justify-center">
      <div>
        <img className="h-full w-full" src="/gridblog.png" alt="blog1"></img>
      </div>
      {/* blog details */}
      <div className=" flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch  flex-col justify-start items-start gap-3 flex">
          <span className="self-stretch text-violet-700 text-xs font-semibold font-['Inter'] leading-tight">
            Phoenix Baker • 1 Jan 2023
          </span>

          <h3 className="self-stretch text-zinc-900 text-[1rem] font-semibold font-['Inter'] leading-7">
            Grid system for better Design User Interface
          </h3>
          <p className="self-stretch text-gray-500 text-[0.9rem] font-normal font-['Inter'] leading-normal">
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate.
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
