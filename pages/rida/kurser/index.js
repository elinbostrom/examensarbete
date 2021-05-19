import styles from '@/styles/Kurser.module.scss'
import { useRouter } from "next/router";

// components
import LessonsCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
// get data
import { COURSES } from '@/queries/courses'
import client from '@/apollo/client';
import { useContext, useEffect, useState } from 'react';
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider';
import Button from '@/components/Buttons/Button';
import TextInformationSection from '@/components/TextInformationSection';
import ArticleSection from '@/components/ArticleSection';
import CourseList from '@/components/CourseList';
import { menuItems } from '@/utils/menuItems';

export default function CoursesPage({ heroes, courses, pageInfo }) {
  const { setActivePage } = useContext(LessonsCoursesContext)
  const router = useRouter();
  const [activeInfo, setActiveInfo] = useState("Alla kurser");
  const information = pageInfo?.[0].information ?? null;

  useEffect(() => { setActivePage("Alla kurser") }, [])

  return (
    <LessonsCoursesLayout heroes={heroes} page="lessoncourses" activePage="Alla kurser">
      <main className={styles.main}>
        {information && <TextInformationSection data={information.welcome} />}
        {information && <ArticleSection data={information.informationOrs} buttonOrs />}
        <section className={styles.navigation}>
          <h3>Våra kurser</h3>
          <div className={styles.btns_container}>
            <Button btnText="Alla kurser" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
            {menuItems.map(item => {
              if (item.category === "Häst") {
                return (
                  <Button btnText={`${item.title} Häst`} setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
                )
              }
            })}
            {menuItems.map(item => {
              if (item.category === "Ponny") {
                return (
                  <Button btnText={`${item.title} Ponny`} setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
                )
              }
            })}
          </div>
        </section>
        <CourseList activeInfo={activeInfo} courses={courses} />
      </main>
    </LessonsCoursesLayout>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: COURSES
  });

  return {
    props: {
      courses: data?.courses?.nodes,
      heroes: data?.heroes?.nodes,
      pageInfo: data?.newPages?.nodes
    },
  }
}