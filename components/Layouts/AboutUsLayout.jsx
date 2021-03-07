import React from "react";
import Layout from "./index";
import styles from "./Style.module.scss";
import Submenu from "../Submenu";
import LessonCoursesProvider from "@/contexts/LessonCoursesProvider";

export default function AboutUsLayout({ heroes, children, page, activePage }) {
  const heroObj = {
    title: "Vår ridskola",
    slogan: "",
  };
  const heroInfo = heroes?.[0]?.heroInfo ?? heroObj;

  return (
    <Layout data={heroInfo} page={page}>
      <Submenu page={activePage} aboutus />
      <main className={styles.main}>
        <div className={styles.wrapper}>{children}</div>
      </main>
    </Layout>
  );
}