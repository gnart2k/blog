
const Card = (): JSX.Element => {
  return (
    <>
      <div className="relative w-[18em] cursor-pointer p-2 border border-gray-700 mt-7 bg-[#00000040] rounded-lg shadow-2xl shadow-slate-900 hover:shadow-gray-700 transition ease-in-out duration-300 hover:-translate-y-2 text-gray-200 text-center">
        <button className="right-2 absolute top-2 bg hover:bg-white/10 rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>

        </button>
        <img src="/favicon.ico" className="mx-auto h-[12rem] mt-10 w-10/12 " />
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
