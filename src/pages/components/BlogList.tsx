import Card from "./Card";

const BlogList = (): JSX.Element => {
  return (
    <>
      <div className="ml-16 grid pb-64 h-screen grid-flow-row grid-cols-1 gap-4 overflow-y-scroll md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default BlogList;
