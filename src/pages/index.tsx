import { type NextPage } from "next";
import Layout from "./components/Layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import BlogList from "./components/BlogList"
const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="w-full h-[60vh]">
        <BlogList />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;

