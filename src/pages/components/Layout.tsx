import Head from "next/head"
import { FC, ReactNode } from "react"
import CategoryList from "./CategoryList"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>TBlog</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Header />
        <div className="flex">
          <CategoryList />
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}


export default Layout