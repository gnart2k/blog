const Card = (): JSX.Element => {
  return (
    <>
      <div className="relative mt-7 pb-4 w-[18em] cursor-pointer rounded-lg border border-gray-300 bg-white/10 p-2 text-center text-gray-200 shadow-md shadow-gray-600 transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-gray-700">
        <img src="/favicon.ico" className="m-1 w-10 rounded-full" />
        <div className="mt-4 text-left mb-2 ml-6">
          <span className="  text-2xl font-bold">Title</span>
        </div>
        <div className="flex justify-around ">

        <div className="text-left text-[10px] text-gray-200">
          <span>TrangDP</span>
          <span>-</span>
          <span>25/3/2022</span>
        </div>

        <div className=" text-[10px] text-gray-200">
          <span>about</span>
          <span> 2 minute</span>
        </div>
        </div>
        <img src="/favicon.ico" className="mx-auto mt-2 h-[12rem] w-10/12 " />
      </div>
    </>
  );
};

export default Card;
