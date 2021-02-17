import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/LektionerKurser.module.scss';

// get data
import client from '../apollo/client'
import { START_RIDING } from '../queries/start-riding';
import SubNavigation from '../components/SubNavigation';
import LessonCoursesProvider from '../contexts/LessonCoursesProvider';
import TextInformationSection from '../components/TextInformationSection';
import ArticleSection from '../components/ArticleSection';

export default function LektionerKurser({ heroes, lektionerkurseritems }) {
  const { heroInfo } = heroes[0];
  const { borjarida } = lektionerkurseritems[0];

  return (
    <LessonCoursesProvider>
      <Layout data={heroInfo}>
        <SubNavigation />
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <TextInformationSection data={borjarida.welcome} name="Börja rida" />
            <ArticleSection data={borjarida.information} imgright />
            <ArticleSection data={borjarida.minridskola} button />
            <ArticleSection data={borjarida.ridscheman} imgright />
          </div>
        </main>
      </Layout>
    </LessonCoursesProvider>
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