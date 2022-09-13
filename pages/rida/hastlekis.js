import { useContext, useEffect } from 'react'
import { LessonsCoursesContext } from "@/contexts/LessonCoursesProvider";

// Components
import LessonCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import TextInformationSection from '@/components/TextInformationSection';
import ArticleSection from '@/components/ArticleSection/index.jsx';

// Styling
import styles from '@/styles/CourseDetailpage.module.scss'

// get data
import client from '@/apollo/client'
import { HASTLEKIS } from '@/queries/hastlekis';


export default function Hastlekis({ heroes, pageInfo }) {
  const { setActivePage, activePage } = useContext(LessonsCoursesContext);
  const { information } = pageInfo[0];

  useEffect(() => { setActivePage("Hästlekis") }, [])

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses" activePage={activePage}>
      <main className={styles.main}>
        <TextInformationSection data={information.welcome} name="Hästlekis" />
        <ArticleSection data={information.information} imgright button/>
      </main>
    </LessonCoursesLayout>
  )
}


export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: HASTLEKIS
  });

  return {
    props: {
      courses: data?.courses?.nodes,
      pageInfo: data?.newPages?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}