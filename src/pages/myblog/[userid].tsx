import BlogList from "../components/BlogList"
import Layout from "../components/Layout"
import { NextPageWithLayout } from "../_app"

const MyBlog: NextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <div className="text-gray-200 w-full">
        <div>My Blog</div>
        <BlogList />
      </div>
    </>
  )
}

MyBlog.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}



export default MyBlog
