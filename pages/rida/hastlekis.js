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


export default function Hastlekis({ courses, heroes, pageInfo }) {
  const { information } = pageInfo[0];

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses">
      <main className={styles.main}>
        <TextInformationSection data={information.welcome} name="Hästlekis" />
        <ArticleSection data={information.information} imgright />
        <hr className={styles.line} />
        {Array.isArray(courses) && courses.length === 0
          ? <h3 className={styles.courseHeadline}>Tyvärr så är inga kurser tillgängliga i denna kategori just nu 😢</h3>
          : <h3 className={styles.courseHeadline}>Kommande hästlekis pass</h3>}
        <div className={styles.card}>
          {Array.isArray(courses) && courses.map(item => {
            const { category } = item.course;
            if (category === "Hästlekis") {
              return (
                <CourseCard key={item.id} id={item.id} slug={item.slug} courseInfo={item.course} />
              )
            }
          })}
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