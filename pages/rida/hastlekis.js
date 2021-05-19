import { useContext, useEffect, useMemo } from 'react'
import { LessonsCoursesContext } from "@/contexts/LessonCoursesProvider";

// Components
import LessonCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import TextInformationSection from '@/components/TextInformationSection';
import ArticleSection from '@/components/ArticleSection/index.jsx';
import CourseCard from '@/components/CourseCard';

// Styling
import styles from '@/styles/CourseDetailpage.module.scss'

// get data
import client from '@/apollo/client'
import { HASTLEKIS } from '@/queries/hastlekis';
import { formatCourseDate } from '@/utils/formatCourseDate';
import { todaysDate } from '@/utils/todaysDate';


export default function Hastlekis({ courses, heroes, pageInfo }) {
  const { setActivePage, activePage } = useContext(LessonsCoursesContext);
  const { information } = pageInfo[0];
  const today = todaysDate()
  const activeCourses = useMemo(() => {
    let arr = []
    Array.isArray(courses) && courses.forEach(item => {
      const { category } = item.course;
      const courseDate = formatCourseDate(item.course.date)
      if (category === "Hästlekis" && courseDate > today) {
        arr.push(item)
      }
    })
    return arr;
  }, [courses])

  useEffect(() => { setActivePage("Hästlekis") }, [])

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses" activePage={activePage}>
      <main className={styles.main}>
        <TextInformationSection data={information.welcome} name="Hästlekis" />
        <ArticleSection data={information.information} imgright />
        <hr className={styles.line} />
        {Array.isArray(activeCourses) && activeCourses.length === 0
          ? <h3 className={styles.courseHeadline}>Tyvärr så är inga kurser tillgängliga i denna kategori just nu 😢</h3>
          : <h3 className={styles.courseHeadline}>Kommande hästlekis pass</h3>}
        <div className={styles.card}>
          {activeCourses.map(item => <CourseCard key={item.id} id={item.id} slug={item.slug} courseInfo={item.course} />)}
        </div>
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