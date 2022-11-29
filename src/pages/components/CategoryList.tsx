
const CategoryList = (): JSX.Element => {
  return (
    <>
      <div className="mt-10 ml-10  w-[16rem] text-gray-400 bg-[#00000050] h-[70vh] rounded-md">
        <div className="border-b-2 border-gray-200 w-full p-2 text-center">Category</div>

        <div className="flex transition overflow-y-scroll overflow-x-hidden ease-in-out duration-300 hover:bg-[#00000070] items-center justify-center cursor-pointer ">
          <div className="font-bold transition ease-in-out duration-300 hover:-translate-y-1 p-4 w-full text-center ">Category 1</div>
        </div>
        <div className="flex justify-center">
          <hr className="w-full" />
        </div>
        <div className="flex transition overflow-y-scroll overflow-x-hidden ease-in-out duration-300 hover:bg-[#00000070] items-center justify-center cursor-pointer ">
          <div className="font-bold transition ease-in-out duration-300 hover:-translate-y-2 p-4 w-full text-center ">Category 2</div>
        </div>
        <div className="flex justify-center">
          <hr className="w-full" />
        </div>

        <div className="flex transition overflow-y-scroll overflow-x-hidden ease-in-out duration-300 hover:bg-[#00000070] items-center justify-center cursor-pointer ">
          <div className="font-bold transition ease-in-out duration-300 hover:-translate-y-2 p-4 w-full text-center ">Category 3</div>
        </div>
        <div className="flex justify-center">
          <hr className="w-full" />
        </div>



      </div>
    </>
  )
}

export default CategoryList;
