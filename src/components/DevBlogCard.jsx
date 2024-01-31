import { Link } from "react-router-dom";

export const DevBlogCard = (props) => {
  const {
    title,
    cover_image,
    social_image,
    user,
    readable_publish_date,
    description,
    tag_list,
    slug,
  } = props.blogData;
  return (
    <Link
      to={`/devblog/${slug}`}
      className="w-full grid grid-cols-1 gap-4 justify-center"
    >
      <div className="h-40">
        <img
          className="w-full h-full"
          src={cover_image ? cover_image : social_image}
          alt="blog1"
        ></img>
      </div>
      {/* blog details */}
      <div className=" flex-col justify-start items-start gap-4 inline-flex mt-4 sm:mt-0">
        <div className="self-stretch  flex-col justify-start items-start gap-3 flex">
          <span className="self-stretch text-violet-700 text-xs font-semibold font-['Inter'] leading-tight">
            {user.name} • {readable_publish_date}
          </span>

          <h3 className="self-stretch text-zinc-900 text-[1rem] font-semibold font-['Inter'] leading-7">
            {`${title}`}
          </h3>
          <p className="self-stretch text-gray-500 text-[0.9rem] font-normal font-['Inter'] leading-normal">
            {description}
          </p>
        </div>
        <div className="mt-1">
          <span className="text-center text-sky-700 bg-sky-50 text-sm font-medium font-['Inter'] leading-tight px-2 py-0.5 rounded-full">
            {tag_list[0]}
          </span>
          <span className="text-center text-pink-700  bg-pink-50 text-sm font-medium font-['Inter'] leading-tight px-2 py-0.5 rounded-full">
            {tag_list[1]}
          </span>
        </div>
      </div>
    </Link>
  );
};
