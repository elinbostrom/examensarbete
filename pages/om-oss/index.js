import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import React, { useContext } from 'react'
import styles from '@/styles/AboutUs.module.scss'

// Utils
import { createMarkup } from '@/utils/createMarkup'

// Components
import AboutUsLayout from '@/components/Layouts/AboutUsLayout'

// Get data
import client from '@/apollo/client'
import { ABOUT_US } from '@/queries/about-us';

export default function AboutUs({ pageInfo, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);
  const { description, title, history } = pageInfo[0].information.aboutUs;
  setActivePage("Om ridskolan")

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
      <main className={styles.main_about_start}>
        <h2>{title}</h2>
        <p className={styles.paragraph}>{description}</p>
        <h3>Ridskolans historia</h3>
        <div className={styles.paragraph} dangerouslySetInnerHTML={createMarkup(history)} />
        <img src="/images/Anna1.jpeg" alt="Old Picture" />
        <img src="/images/Anna2.jpeg" alt="Old Picture" />
        <img src="/images/Bild1.jpeg" alt="Old Picture" />
        <img src="/images/Bild2.jpeg" alt="Old Picture" />
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