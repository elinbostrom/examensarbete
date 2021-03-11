import styles from '@/styles/Stablenews.module.scss';

// Components
import NewsArticle from '@/components/NewsArticle';
import Layout from '@/components/Layouts';

// get data
import { STALLNYTT } from '../queries/stallnytt';
import { useQuery } from '@apollo/client'
import { useState } from 'react';
import LoadingStableNews from './loading';

export default function Stallnytt() {
  const getPosts = 15;
  const [postShowing, setPostShowing] = useState(5);

  const { data, loading, error } = useQuery(STALLNYTT(getPosts));

  if (loading) return <LoadingStableNews />;
  if (error) return <h1>ERROR</h1>;
  if (!data) return <h1>Not found</h1>;

  const heroes = data.heroes.nodes ?? null;
  const stablenews = data.stablenews.nodes ?? null;
  const { heroInfo } = heroes[0];

  const handleClick = () => {
    setPostShowing(prevState => prevState + 5);
  }

  return (
    <Layout data={heroInfo} page="stablenews">
      <section className={styles.section}>
        <ul className={styles.wrapper}>
          {Array.isArray(stablenews) && stablenews.map((news, index) => {
            const { posts } = news;
            if (index >= postShowing) return null
            else {
              return (
                <NewsArticle
                  key={news.id}
                  postInfo={posts}
                  date={news.date}
                  id={news.id} />
              )
            }
          })}
          <button className={styles.loadMoreBtn} onClick={handleClick}>Se fler inlägg</button>
        </ul>
      </section>
    </Layout>
  )
}


// export async function getStaticProps(context) {

//   const { data, loading, networkStatus } = await client.query({
//     query: STALLNYTT(10)
//   });

//   return {
//     props: {
//       stablenews: data?.stablenews?.nodes,
//       heroes: data?.heroes?.nodes
//     },
//   }
// }