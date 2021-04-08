import React from "react";
import Layout from "./index";
import styles from "./Style.module.scss";
import Submenu from "../../components/Submenu";

export default function LessonsCoursesLayout({ heroes, children, page, activePage }) {
  const heroObj = {
    title: "Lektioner & Kurser",
    slogan: "",
  };
  const heroInfo = heroes?.[0]?.heroInfo ?? heroObj;

  return (
    <Layout data={heroInfo} page={page}>
      <Submenu page={activePage} />
      <main className={styles.main}>{children}</main>
    </Layout>
  );
}
