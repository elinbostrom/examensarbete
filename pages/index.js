import Head from 'next/head'

// Components
import Layout from '../components/Layout.js'
import CTAsection from '../components/CTAsection.js'
import NewsStartSection from '../components/NewsStartSection.js'
import SectionStartRiding from '../components/SectionStartRiding.js'

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
        <link rel="shortcut icon" href="../public/vr-favicon.svg" />
      </Head>
      <Layout data={heroInfo}>
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