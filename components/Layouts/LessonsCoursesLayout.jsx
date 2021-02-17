import React from 'react'
import Layout from './index'
import styles from './Style.module.scss';

// get data
import client from '../../apollo/client'
import { START_RIDING } from '../../queries/start-riding';
import Submenu from '../../components/Submenu';
import LessonCoursesProvider from '../../contexts/LessonCoursesProvider';

export default function LessonsCoursesLayout({ heroes, children, page }) {
 const { heroInfo } = heroes[0];

  return (
    <LessonCoursesProvider>
      <Layout data={heroInfo} page={page}>
        <Submenu />
        <main className={styles.main}>
          <div className={styles.wrapper}>
          {children}
          </div>
          </main>
        </Layout>
    </LessonCoursesProvider>
  )
}