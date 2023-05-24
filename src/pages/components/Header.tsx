import { type NextPage } from "next";
import AuthButton from "./AuthButton";
const Header: NextPage = () => {
  return (
    <>
      <div className="fixed flex h-20 w-full items-center justify-around bg-white/10 text-gray-200">
        <div className="flex items-center ">
          <img src="/favicon.ico" className="ml-4 rounded-full" />
          <button className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20">
            My Blog
          </button>
          <button className="mx-2 rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20 ">
            <span className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="ml-2">Create</span>
            </span>
          </button>
        </div>
        <div className="flex w-8/12 items-center justify-center ">
          <div className="w-5/12 rounded-[50px] bg-white/10 px-8 py-3  ">
            <input placeholder="Search" className="bg-transparent focus:outline-0" />
          </div>
        </div>
        <div>
          <AuthButton />
        </div>
      </div>
    </>
  );
};

export default Header;
