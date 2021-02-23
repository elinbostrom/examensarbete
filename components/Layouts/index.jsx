import Head from "next/head";
import React from "react";
import Footer from "./Footer/Footer";
import Hero from "./Hero";

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
