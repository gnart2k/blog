import BlogList from "../components/BlogList"
import Layout from "../components/Layout"
import { NextPageWithLayout } from "../_app"

const CreateBlog: NextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="text-gray-200 w-full flex items-center flex-col mt-20">
        <div className="w-8/12 px-4 border border-slate-600 rounded-lg ">
          <input type="text" name="title" placeholder="Title" className="w-full h-full px-2 py-4 focus:outline-none bg-transparent " />
        </div>
        <div className="w-8/12 px-4 border border-slate-600 rounded-lg mt-4 h-[36vh] overflow-scroll">
          <textarea className="bg-transparent w-full h-full focus:outline-none" name="content" placeholder="write something here..." />
        </div>

        <div className="flex items-center justify-center w-8/12 mt-10">
          <label className="flex flex-col items-center justify-center w-full h-65 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-white/10 hover:bg-white/10 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <div className="rounded-xl w-20 h-12 mx-auto  mt-10 bg-gradient-to-r p-[2px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] cursor-pointer">
          <div className="flex flex-col justify-between h-full bg-[#1b143a] text-center text-white rounded-lg pt-2 hover:bg-transparent">
            Submit
          </div>
        </div>
      </div>
    </>
  )
}

CreateBlog.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}



export default CreateBlog
