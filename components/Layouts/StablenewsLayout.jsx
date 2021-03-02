import Head from "next/head";
import React from "react";
import Layout from ".";
import styles from "./Style.module.scss";

export default function StablenewsLayout({ children, heroInfo, page }) {
  return (
    <Layout data={heroInfo} page={page}>
      <main className={styles.main}>
        <div className={styles.wrapper}>{children}</div>
      </main>
    </Layout>
  );
}
