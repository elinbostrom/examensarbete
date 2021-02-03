import Head from 'next/head'
import Layout from '../components/Layout.js'

export default function Home() {
  return (
    <Layout>
      <div className="startpage">
        <Head>
          <title>Startpage</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Examensarbete</h1>
      </div>
    </Layout>
  )
}
