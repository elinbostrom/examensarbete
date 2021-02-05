import Head from 'next/head'
import Layout from '../components/Layout.js'

export default function Home() {
  return (
    <Layout>
      <div className="startpage">
        <Head>
          <title>Startpage</title>
        </Head>
      </div>
    </Layout>
  )
}
