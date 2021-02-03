import React from 'react';
import Footer from './Footer';
import style from './Layout.module.scss'
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <div className={style.wrapper}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  )
}
