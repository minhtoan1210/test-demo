import { useDemoQuery } from "@/queries/demo";

const Home = () => {
  const demoQuery = useDemoQuery()

  console.log("demoQuery", demoQuery)

  return (
    <>
      <h1>Minh toàn</h1>
    </>
  );
};

export default Home;
