export const BlogCard = () => {
  return (
    <a className="w-full">
      <img className="w-full h-fit" src="/recentblog1.png" alt="blog1"></img>
      {/* blog details */}
      <div className="flex flex-col justify-center gap-3 mt-3">
        <span className=" text-violet-700 text-sm font-semibold font-['Inter'] leading-tight">
          Olivia Rhye • 1 Jan 2023
        </span>
        <h4 className=" text-zinc-900 text-2xl font-semibold font-['Inter'] leading-loose">
          UX review presentations
        </h4>
        <p className="w-full text-gray-500 text-base font-normal font-['Inter'] leading-normal">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
        <div className=" h-6 justify-start items-start gap-2 inline-flex">
          <div className="mix-blend-multiply justify-start items-start flex">
            <div className="px-2.5 py-0.5 bg-purple-50 rounded-2xl justify-center items-center flex">
              <div className="text-center text-violet-700 text-sm font-medium font-['Inter'] leading-tight">
                Design
              </div>
            </div>
          </div>
          <div className="mix-blend-multiply justify-start items-start flex">
            <div className="px-2.5 py-0.5 bg-indigo-50 rounded-2xl justify-center items-center flex">
              <div className="text-center text-indigo-700 text-sm font-medium font-['Inter'] leading-tight">
                Research
              </div>
            </div>
          </div>
          <div className="mix-blend-multiply justify-start items-start flex">
            <div className="px-2.5 py-0.5 bg-pink-50 rounded-2xl justify-center items-center flex">
              <div className="text-center text-pink-700 text-sm font-medium font-['Inter'] leading-tight">
                Presentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
