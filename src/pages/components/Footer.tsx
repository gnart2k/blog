import { type NextPage } from "next"

const Footer: NextPage = () => {
  return (
    <>
      <div className="text-white items-center justify-center flex-col w-full h-22 bg-gradient-to-t from-[#000000] shadow-md to-[#00000060] flex absolute bottom-0">
        <div className="flex items-center mt-4">
          <img src="/assets/img/logo1.png" className="w-[40px] rounded-full mr-4" />
          <p className="font-bold">Trang</p>
        </div>
        <div>
          <hr className=" border border-gray-700 w-[280px] mt-2 " />
          <div className="flex mb-4 items-center justify-around w-[10rem] mx-auto mt-4">
            <div className={styles.logo_box}>
              <a href="https://fb.com/trangs2k"><img src="/assets/img/fb_logo.png" className="w-[1.5rem] bg-white rounded-full" /></a>
            </div>
            <div className={styles.logo_box}>
              <a href="https://github.com/gnart2k"><img src="/assets/img/github_logo.png" className="w-[1.5rem] bg-white rounded-full" /></a>
            </div>

            <div className={styles.logo_box}>
              <a href="https://www.linkedin.com/in/trang-duong-a13797224/"><img src="/assets/img/linkedin_logo.png" className="w-[1.5rem] bg-white rounded-full" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  logo_box: "transition ease-in-out duration-300 hover:scale-110 hover:-translate-y-2"
}

export default Footer
