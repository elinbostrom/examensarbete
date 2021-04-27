import React, { useState, useEffect } from "react";
import styles from "./Style.module.scss";

// Components
import Layout from "./index";
import Submenu from "./Submenu";
import SubmenuMobile from "./SubmenuMobile";

export default function LessonsCoursesLayout({ heroes, children, page, activePage }) {
  const [isItAMobileDevice, setIsItAMobileDevice] = useState(false);
  const heroObj = {
    title: "Lektioner & Kurser",
    slogan: "",
  };

  useEffect(() => {
    if (window.innerWidth < 430) {
      setIsItAMobileDevice(true);
    }
  }, []);

  // if heroInfo recevies no data , heroObj will be the default data. the two ?? is called nullish coalescing
  const heroInfo = heroes?.[0]?.heroInfo ?? heroObj;

  return (
    <Layout data={heroInfo} page={page}>
      {isItAMobileDevice ? <SubmenuMobile page={activePage} /> : <Submenu page={activePage} />}
      <main className={styles.main}>{children}</main>
    </Layout>
  );
}
