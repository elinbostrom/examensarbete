import React from "react";
import styles from "./Style.module.scss";

// Components
import Layout from "./index";
import Submenu from "../Submenu";

export default function AboutUsLayout({ heroes, children, page, activePage }) {
  const heroObj = {
    title: "Vår ridskola",
    slogan: "",
  };
  const heroInfo = heroes?.[0]?.heroInfo ?? heroObj;

  return (
    <Layout data={heroInfo} page={page}>
      <Submenu page={activePage} aboutus />
      <main className={styles.main}>{children}</main>
    </Layout>
  );
}
