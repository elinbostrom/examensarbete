import AboutUsLayout from '@/components/Layouts/AboutUsLayout'
import Wrapper from '@/components/Wrapper'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import React, { useContext, useEffect } from 'react'
import styles from '@/styles/AboutUs.module.scss'

// get data
import client from '@/apollo/client'
import { ABOUT_US } from '@/queries/about-us';
import Article from '@/components/Article'

export default function AboutUs({ aboutusposts, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);
  const { description, article } = aboutusposts[0];
  const { sectionOne, sectionTwo, sectionThree } = article;
  setActivePage("Om ridskolan")

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
      <main className={styles.main}>
        <h2>Välkommen till oss</h2>
        <p className={styles.paragraph}>{description.description}</p>
        <Article data={sectionOne} imgRight />
        <Article data={sectionTwo} imgRight />
        <Article data={sectionThree} imgRight />
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
      aboutusposts: data?.aboutusposts?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}