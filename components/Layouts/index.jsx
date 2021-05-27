import React, { useContext, useEffect } from "react";
import Head from "next/head";
import styles from "./Style.module.scss";

// Components
import Hero from "./Hero";
import Footer from "./Footer/Footer";
import { GlobalContext } from "@/contexts/GlobalContextProvider";

/* Creating layout component to make sure that the pages 
will have the same styling structure. Using the children prop
to get the elements that are wrapped in the layout tag
the same structure*/
export default function Layout({ children, data, page }) {
  const { showMenu } = useContext(GlobalContext);

  useEffect(() => {
    console.log(showMenu);
  }, [showMenu]);

  return (
    <div className={showMenu && styles.noScroll}>
      <Head>
        <title>Vendelsö Ridskola</title>
        <link rel="icon" href="/vr-favicon.svg" />
      </Head>
      <Hero data={data} page={page} />
      {children}
      <Footer />
    </div>
  );
}
