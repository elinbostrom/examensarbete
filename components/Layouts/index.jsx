import React from "react";
import Head from "next/head";

// Components
import Hero from "./Hero";
import Footer from "./Footer/Footer";

export default function Layout({ children, data, page }) {
  return (
    <>
      <Head>
        <title>Vendelsö Ridskola</title>
        <link rel="icon" href="/vr-favicon.svg" />
      </Head>
      <Hero data={data} page={page} />
      {children}
      <Footer />
    </>
  );
}
