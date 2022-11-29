import Card from "./Card"


const BlogList = (): JSX.Element => {
  return (
    <>
      <div className="overflow-y-scroll h-[70vh] mt-7 ml-16 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-flow-row gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </>
  )
}

export default BlogList
