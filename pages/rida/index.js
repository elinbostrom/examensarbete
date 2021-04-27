import styles from '@/styles/LektionerKurser.module.scss'
import { useContext, useEffect } from 'react'
import { LessonsCoursesContext } from "@/contexts/LessonCoursesProvider";

// Components
import LessonCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import TextInformationSection from '@/components/TextInformationSection';
import ArticleSection from '@/components/ArticleSection/index.jsx';

// get data
import client from '@/apollo/client'
import { START_RIDING } from '@/queries/start-riding';

export default function LektionerKurser({ heroes, pageInfo }) {
  const { information } = pageInfo[0];
  const { setActivePage, activePage } = useContext(LessonsCoursesContext);

  useEffect(() => { setActivePage("Börja rida") }, [])

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses" activePage={activePage}>
      <main className={styles.main}>
        <TextInformationSection data={information.welcome} name="Börja rida" />
        <ArticleSection data={information.information} imgright />
        <ArticleSection data={information.minridskola} button />
        <ArticleSection data={information.ridscheman} imgright />
      </main>
    </LessonCoursesLayout>
  )
}


export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: START_RIDING
  });

  return {
    props: {
      pageInfo: data?.newPages?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}