import { Router, useRouter } from "next/router"
import { ReactElement } from "react"
import Layout from "../components/Layout"
import { NextPageWithLayout } from "../_app"

const BlogDetail: NextPageWithLayout = (): JSX.Element => {
  const router = useRouter()
  const { BlogId } = router.query

  return (
    <>
      <div className="text-gray-200 pt-16 mx-auto w-full flex flex-col h-[84vh] overflow-scroll">
        <h1 className="font-bold text-4xl text-center mb-8">Title</h1>
        <div className="flex flex-row-reverse p-2 items-end text-gray-500 font-semibold">
          <span className="mr-2">Date</span>
          <span className="mr-2 text-xl">Author</span>
        </div>
        <div>
          <hr className="mb-4 mt-1" />
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" className="w-7/12 mx-auto object-cover rounded-lg" />
        <div>
          <hr className="my-4" />
        </div>
        <span className="mx-40 mb-80">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</span>
      </div>
    </>
  )
}

BlogDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}



export default BlogDetail
