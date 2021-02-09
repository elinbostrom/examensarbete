import React from 'react'

// Components
import Layout from '../components/Layout'

// get data
import client from '../apollo/client'
import { STALLNYTT } from '../queries/stallnytt';

export default function Stallnytt({ stablenews }) {
  const { }

  return (
    <Layout>

    </Layout>
  )
}


export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: GET_POSTS
  });

  return {
    props: {
      stablenews: data?.stablenews?.nodes
    },
  }
}