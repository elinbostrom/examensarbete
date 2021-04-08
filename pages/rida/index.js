import styles from '@/styles/LektionerKurser.module.scss'

// Components
import LessonCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import TextInformationSection from '@/components/TextInformationSection';
import ArticleSection from '@/components/ArticleSection/index.jsx';

// get data
import client from '@/apollo/client'
import { START_RIDING } from '@/queries/start-riding';

export default function LektionerKurser({ heroes, lektionerkurseritems }) {
  const { information } = lektionerkurseritems[0];

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses">
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
      lektionerkurseritems: data?.lektionerkurseritems?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}