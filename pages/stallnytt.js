import React from 'react'

// Components
import NewsArticle from '@/components/NewsArticle';
import StablenewsLayout from '@/components/Layouts/StablenewsLayout';

// get data
import client from '../apollo/client'
import { STALLNYTT } from '../queries/stallnytt';

export default function Stallnytt({ stablenews, heroes }) {
  const { heroInfo } = heroes[0];

  return (
    <StablenewsLayout heroInfo={heroInfo} page="stablenews">
      <ul style={{ padding: 0 }}>
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
    </StablenewsLayout>
  )
}


export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: STALLNYTT(10)
  });

  return {
    props: {
      stablenews: data?.stablenews?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}