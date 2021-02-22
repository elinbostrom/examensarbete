import React from "react";
import Layout from "./index";
import styles from "./Style.module.scss";
import Submenu from "../../components/Submenu";
import LessonCoursesProvider from "../../contexts/LessonCoursesProvider";

export default function LessonsCoursesLayout({ heroes, children, page, activePage }) {
  const { heroInfo } = heroes[0];

  return (
    <LessonCoursesProvider>
      <Layout data={heroInfo} page={page}>
        <Submenu page={activePage} />
        <main className={styles.main}>
          <div className={styles.wrapper}>{children}</div>
        </main>
      </Layout>
    </LessonCoursesProvider>
  );
}
