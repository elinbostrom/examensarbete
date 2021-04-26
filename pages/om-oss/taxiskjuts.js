import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import React, { useContext, useEffect } from 'react'
import styles from '@/styles/AboutUs.module.scss'

// Components
import AboutUsLayout from '@/components/Layouts/AboutUsLayout'

// Utils
import { createMarkup } from '@/utils/createMarkup'

// Get data
import client from '@/apollo/client'
import { TAXISKJUTS } from '@/queries/taxiskjuts';

export default function Taxiskjuts({ pageInfo, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);
  const title = pageInfo[0].title;
  const content = pageInfo[0].information.infoDescriptionSection;

  useEffect(() => { setActivePage("Taxiskjuts") }, [])

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
      <section className={styles.taxiskjuts}>
        <h2 className={styles.headline}>{title}</h2>
        <div className={styles.text} dangerouslySetInnerHTML={createMarkup(content)} />
        <img src="https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="Bild på taxi" />

      </section>
    </AboutUsLayout>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: TAXISKJUTS
  });

  return {
    props: {
      pageInfo: data?.newPages?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}