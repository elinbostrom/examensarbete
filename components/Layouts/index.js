import React from 'react';
import Footer from './Footer';
import Hero from './Hero';

export default function Layout({ children, data, page }) {
  return (
    <>
      <Hero data={data} page={page} />
      {children}
      <Footer />
    </>
  )
}
