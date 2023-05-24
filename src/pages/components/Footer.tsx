import { type NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <>
      <div className="h-22 fixed bottom-0 flex w-full flex-col items-center justify-center bg-[#49a09d]/60 text-white shadow-md">
        <div className="mt-4 flex items-center">
          <img src="/assets/img/logo1.png" className="mr-4 w-[40px] rounded-full" />
          <p className="font-bold">Trang</p>
        </div>
        <div>
          <hr className=" mt-2 w-[280px] border border-gray-700 " />
          <div className="mx-auto mb-4 mt-4 flex w-[10rem] items-center justify-around">
            <div className={styles.logo_box}>
              <a href="https://fb.com/trangs2k">
                <img src="/assets/img/fb_logo.png" className="w-[1.5rem] rounded-full bg-white" />
              </a>
            </div>
            <div className={styles.logo_box}>
              <a href="https://github.com/gnart2k">
                <img
                  src="/assets/img/github_logo.png"
                  className="w-[1.5rem] rounded-full bg-white"
                />
              </a>
            </div>

            <div className={styles.logo_box}>
              <a href="https://www.linkedin.com/in/trang-duong-a13797224/">
                <img
                  src="/assets/img/linkedin_logo.png"
                  className="w-[1.5rem] rounded-full bg-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  logo_box: "transition ease-in-out duration-300 hover:scale-110 hover:-translate-y-2",
};

export default Footer;
