import styles from '@/styles/Stablenews.module.scss';

// Components
import NewsArticle from '@/components/NewsArticle';
import Layout from '@/components/Layouts';

// get data
import { STALLNYTT } from '../queries/stallnytt';
import client from '@/apollo/client';

export default function LoadingStableNews({ heroes }) {
  console.log(heroes);

  return (
    // <Layout data={heroInfo} page="stablenews">
    //   <section className={styles.section}>
    //     <h2>Sidan laddar...</h2>
    //   </section>
    // </Layout>
    <h1>hej</h1>
  )
}


export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: STALLNYTT(10)
  });

  return {
    props: {
      heroes: data?.heroes?.nodes
    },
  }
}