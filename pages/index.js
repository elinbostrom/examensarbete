// Components
import Layout from "@/components/Layouts/index.jsx";
import NewsStartSection from "@/components/NewsStartSection/index.jsx";
import SectionStartRiding from "@/components/SectionStartRiding/index.jsx";

// get data
import client from "../apollo/client";
import { STARTPAGE } from "../queries/startpage";

export default function Home({ pageInfo, heroes, stablenews, animals }) {
  const { startRiding } = pageInfo[0].information.startpage;
  const { heroInfo } = heroes[0];

  return (
    <Layout data={heroInfo} page="startpage">
      {/* <NewsStartSection data={stablenews} /> */}
      <SectionStartRiding data={startRiding} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { data, loading, networkStatus } = await client.query({
    query: STARTPAGE,
  });

  return {
    props: {
      pageInfo: data?.newPages?.nodes,
      heroes: data?.heroes?.nodes,
      stablenews: data?.stablenews?.nodes,
    },
  };
}
