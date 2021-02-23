import Head from 'next/head'

// Components
import Layout from '@/components/Layouts/index.jsx'
import CTAsection from '@/components/CTAsection/index.jsx'
import NewsStartSection from '@/components/NewsStartSection/index.jsx'
import SectionStartRiding from '@/components/SectionStartRiding/index.jsx'

// get data
import client from '../apollo/client'
import { STARTPAGE } from '../queries/startpage';

export default function Home({ startpageitems, heroes, stablenews }) {
  const { cta, start_riding } = startpageitems[0];
  const { heroInfo } = heroes[0];

  return (
    <>
      <Head>
        <title>Vendelsö Ridskola</title>
        <link rel="icon" href="/vr-favicon.svg" />
      </Head>
      <Layout data={heroInfo} page="startpage">
        <CTAsection data={cta} />
        <NewsStartSection data={stablenews} />
        <SectionStartRiding data={start_riding} />
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: STARTPAGE
  });

  return {
    props: {
      startpageitems: data?.startpageitems?.nodes,
      heroes: data?.heroes?.nodes,
      stablenews: data?.stablenews?.nodes
    },
  }
}