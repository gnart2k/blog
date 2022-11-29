
const Card = (): JSX.Element => {
  return (
    <>
      <div className="w-[18em] cursor-pointer p-2 border border-gray-700 mt-7 bg-[#00000040] rounded-lg shadow-xl shadow-gray-700 transition ease-in-out duration-300 hover:-translate-y-2 text-gray-200 text-center">
        <img src="/favicon.ico" className="mx-auto h-[12rem] mt-5 w-10/12 " />
        <div className="mt-4 mb-2">
          <span className="font-bold p-4 ">Title</span>
        </div>
        <hr />
        <p className="h-24">some text</p>
        <div className="flex justify-between text-gray-500 border-t border-gray-500">
          <span>Author</span>
          <span>Date</span>
        </div>
      </div>
    </>
  )
}

export default Card
