import React from "react";
import styles from "./Style.module.scss";

// Components
import Layout from "./index";
import Submenu from "../../components/Submenu";

export default function LessonsCoursesLayout({ heroes, children, page, activePage }) {
  const heroObj = {
    title: "Lektioner & Kurser",
    slogan: "",
  };

  // if heroInfo recevies no data , heroObj will be the default data. the two ?? is called nullish coalescing
  const heroInfo = heroes?.[0]?.heroInfo ?? heroObj;

  return (
    <Layout data={heroInfo} page={page}>
      <Submenu page={activePage} />
      <main className={styles.main}>{children}</main>
    </Layout>
  );
}
