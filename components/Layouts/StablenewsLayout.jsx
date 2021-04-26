import React from "react";
import styles from "./Style.module.scss";

// Components
import Layout from ".";

export default function StablenewsLayout({ children, heroInfo, page }) {
  return (
    <Layout data={heroInfo} page={page}>
      <main className={styles.main}>
        <div className={styles.wrapper}>{children}</div>
      </main>
    </Layout>
  );
}
