import React from "react";
import Layout from "./index";
import styles from "./Style.module.scss";
import Submenu from "../../components/Submenu";
import LessonCoursesProvider from "../../contexts/LessonCoursesProvider";
import Head from "next/head";

export default function LessonsCoursesLayout({ heroes, children, page, activePage }) {
  const heroObj = {
    title: "Lektioner & Kurser",
    slogan: "",
  };
  const heroInfo = heroes?.[0]?.heroInfo ?? heroObj;

  return (
    <LessonCoursesProvider>
      <Head>
        <title>Vendelsö Ridskola - Lektioner & Kurser</title>
        <link rel="icon" href="/vr-favicon.svg" />
      </Head>
      <Layout data={heroInfo} page={page}>
        <Submenu page={activePage} />
        <main className={styles.main}>
          <div className={styles.wrapper}>{children}</div>
        </main>
      </Layout>
    </LessonCoursesProvider>
  );
}
