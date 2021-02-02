import React from 'react';
import style from './Layout.scss';

export default function Layout({ children }) {
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  )
}
