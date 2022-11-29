import { Router, useRouter } from "next/router"
import { ReactElement } from "react"
import Layout from "../components/Layout"
import { NextPageWithLayout } from "../_app"

const BlogDetail: NextPageWithLayout = (): JSX.Element => {
  const router = useRouter()
  const { BlogId } = router.query

  return (
    <>
      <div className="text-gray-200 mt-16 mx-8 ">
        <h1 className="font-bold text-4xl text-center mb-8">Title</h1>
        <span>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</span>
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
