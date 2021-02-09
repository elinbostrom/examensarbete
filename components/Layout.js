import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import style from './Layout.module.scss'

export default function Layout({ children, data }) {
  return (
    <>
      <div className={style.wrapper}>
        <Hero data={data} />
      </div>
      {children}
      <Footer />
    </>
  )
}
