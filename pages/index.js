import Head from 'next/head'
import CTAsection from '../components/CTAsection.js'
import Layout from '../components/Layout.js'
import NewsStartSection from '../components/NewsStartSection.js'
import SectionStartRiding from '../components/SectionStartRiding.js'

// get data
import client from '../apollo/client'
import { GET_STARTPAGE } from '../queries/get-startpage';

export default function Home({ startpageitems }) {
  const { welcome, cta, start_riding } = startpageitems[0];
  console.log(startpageitems);

  return (
    <>
      <Head>
        <title>Vendelsö Ridskola</title>
      </Head>
      <Layout data={welcome}>
        <CTAsection data={cta} />
        <NewsStartSection />
        <SectionStartRiding data={start_riding} />
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: GET_STARTPAGE
  });

  return {
    props: {
      startpageitems: data?.startpageitems?.nodes
    },
  }
}