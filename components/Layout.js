import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import style from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <div className={style.wrapper}>
        <Hero />
      </div>
      {children}
      <Footer />
    </>
  )
}
