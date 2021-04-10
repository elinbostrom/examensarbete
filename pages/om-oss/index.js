import AboutUsLayout from '@/components/Layouts/AboutUsLayout'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import React, { useContext, useEffect } from 'react'
import styles from '@/styles/AboutUs.module.scss'

// get data
import client from '@/apollo/client'
import { ABOUT_US } from '@/queries/about-us';
import Article from '@/components/Article'

export default function AboutUs({ pageInfo, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);
  const { description, title, history } = pageInfo[0].information.aboutUs;
  setActivePage("Om ridskolan")

  console.log({ pageInfo });

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
      <main className={styles.main}>
        <h2>{title}</h2>
        <p className={styles.paragraph}>{description}</p>
        <p className={styles.paragraph}>{history}</p>
      </main>
    </AboutUsLayout>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: ABOUT_US
  });

  return {
    props: {
      pageInfo: data?.newPages?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}