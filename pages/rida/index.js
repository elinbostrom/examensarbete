// Components
import LessonCoursesLayout from '../../components/Layouts/LessonsCoursesLayout'
import TextInformationSection from '../../components/TextInformationSection';
import ArticleSection from '../../components/ArticleSection';

// get data
import client from '../../apollo/client'
import { START_RIDING } from '../../queries/start-riding';
import { useContext, useEffect } from 'react';
import { LessonsCoursesContext } from '../../contexts/LessonCoursesProvider';

export default function LektionerKurser({ heroes, lektionerkurseritems }) {
  const { borjarida } = lektionerkurseritems[0];

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses">
      <TextInformationSection data={borjarida.welcome} name="Börja rida" />
      <ArticleSection data={borjarida.information} imgright />
      <ArticleSection data={borjarida.minridskola} button />
      <ArticleSection data={borjarida.ridscheman} imgright />
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