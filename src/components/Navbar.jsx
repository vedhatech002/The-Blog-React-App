import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  return (
    <header className="flex font-['Inter'] items-center justify-between md:px-16 sm:px-8 px-6 py-4 border-b border-[#00000057] fixed w-full bg-white mb-8 z-10">
      <div className="flex items-center gap-4">
        <h1 className="text-zinc-900 md:text-2xl sm:text-xl text-lg font-bold ">
          THE BLOG
        </h1>
        <SearchBar />
      </div>
      <div className="items-center justify-center gap-8 text-zinc-700 md:flex hidden">
        <Link
          to={`/home`}
          className="flex items-center gap-2 cursor-pointer text-sm  hover:text-zinc-900 "
        >
          Home
        </Link>
        <Link
          to={`/devblog`}
          className="flex items-center gap-2 cursor-pointer text-sm  hover:text-zinc-900 "
        >
          devBlogs
        </Link>
        <a className="flex items-center gap-2 cursor-pointer text-sm  hover:text-zinc-900 ">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Write"
            >
              <path
                d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                fill="currentColor"
              ></path>
              <path
                d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                stroke="currentColor"
              ></path>
            </svg>
          </span>
          <span>Write</span>
        </a>
        <a className="cursor-pointer text-sm  hover:text-zinc-900">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Notifications"
          >
            <path
              d="M15 18.5a3 3 0 1 1-6 0"
              stroke="currentColor"
              stroke-linecap="round"
            ></path>
            <path
              d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
              stroke="currentColor"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
        <a>
          <img
            className="h-[32px] w-[32px] rounded-full"
            src="https://miro.medium.com/v2/resize:fill:64:64/0*0Kvo3qL1qUa2uFrx"
          ></img>
        </a>
      </div>
      <span className="md:hidden block text-zinc-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
          />
        </svg>
      </span>
    </header>
  );
};
