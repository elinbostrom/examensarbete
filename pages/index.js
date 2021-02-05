import Head from 'next/head'
import CTAsection from '../components/CTAsection.js'
import Layout from '../components/Layout.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Startpage</title>
      </Head>
      <Layout>
        <CTAsection />
      </Layout>
    </>
  )
}
