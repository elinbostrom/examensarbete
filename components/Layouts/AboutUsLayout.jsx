import React, { useEffect, useState } from "react";
import styles from "./Style.module.scss";

// Components
import Layout from "./index";
import Submenu from "./Submenu";
import SubmenuMobile from "./SubmenuMobile";

export default function AboutUsLayout({ heroes, children, page, activePage }) {
  const [isItAMobileDevice, setIsItAMobileDevice] = useState(false);
  const heroObj = {
    title: "Vår ridskola",
    slogan: "",
  };
  const heroInfo = heroes?.[0]?.heroInfo ?? heroObj;

  useEffect(() => {
    if (window.innerWidth < 430) {
      setIsItAMobileDevice(true);
    }
  }, []);

  return (
    <Layout data={heroInfo} page={page}>
      {isItAMobileDevice ? (
        <SubmenuMobile page={activePage} aboutus />
      ) : (
        <Submenu page={activePage} aboutus />
      )}
      <main className={styles.main}>{children}</main>
    </Layout>
  );
}
