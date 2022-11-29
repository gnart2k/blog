import { type NextPage } from "next";
import AuthButton from "./AuthButton"
const Header: NextPage = () => {
  return (
    <>
      <div className="h-20 bg-gradient-to-b from-[#000000] shadow-md to-[#00000060] text-gray-200 flex justify-around items-center">
        <div className="flex items-center ">
          <div className="mr-4">
            <a><img src="/assets/img/logo1.png" className="w-[3rem] rounded-full shadow-md" /></a>
          </div>
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          >
            blog
          </button>
        </div>
        <div className="w-8/12 flex items-center justify-center ">
          <div className="px-8 py-3 rounded-[50px] bg-white/10 w-5/12  ">
            <input placeholder="Search" className="bg-transparent focus:outline-0" />
          </div>
        </div>
        <div>
          <AuthButton />
        </div>
      </div>
    </>
  )
}

export default Header

