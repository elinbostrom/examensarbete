import React from 'react'
import styles from '../styles/Stallnytt.module.scss'

// Components
import Layout from '../components/Layout'
import NewsArticle from '../components/NewsArticle';

// get data
import client from '../apollo/client'
import { STALLNYTT } from '../queries/stallnytt';

export default function Stallnytt({ stablenews, heroes }) {
  const { heroInfo } = heroes[0];

  return (
    <Layout data={heroInfo}>
      <ul className={styles.stablenews_list}>
        {Array.isArray(stablenews) && stablenews.map(news => {
          const { posts } = news;

          return (
            <NewsArticle
              key={news.id}
              postInfo={posts}
              date={news.date}
              id={news.id} />
          )
        })}
      </ul>
    </Layout>
  )
}


export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: STALLNYTT(5)
  });

  return {
    props: {
      stablenews: data?.stablenews?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}