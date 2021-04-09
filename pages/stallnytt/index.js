import styles from '@/styles/Stablenews.module.scss';
import { useState } from 'react';

// Components
import NewsArticle from '@/components/NewsArticle';
import Layout from '@/components/Layouts';
import LoadingStableNews from '../loading';

// Get data
import { STALLNYTT } from '../../queries/stallnytt';
import { useQuery } from '@apollo/client'

export default function Stablenews() {
  const [postShowing, setPostShowing] = useState(4);

  const { data, loading, error } = useQuery(STALLNYTT);

  if (loading) return <LoadingStableNews />;
  if (error) return <h1>ERROR</h1>;
  if (!data) return <h1>Not found</h1>;

  const heroes = data.heroes.nodes ?? null;
  const stablenews = data.stablenews.nodes ?? null;
  const { heroInfo } = heroes[0];

  const handleClick = () => {
    setPostShowing(prevState => prevState + 4);
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
                  slug={news.slug}
                  id={news.id} />
              )
            }
          })}
          {Array.isArray(stablenews) && stablenews.length > postShowing && <button className={styles.loadMoreBtn} onClick={handleClick}>Se fler inlägg</button>}
        </ul>
      </section>
    </Layout>
  )
}