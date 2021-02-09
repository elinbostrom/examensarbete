import React from 'react'
import style from './Hero.module.scss'
import Navbar from './Navbar'

export default function Hero({ data }) {
  return (
    <header className={style.header}>
      <Navbar />
      <section className={style.text}>
        <h1>{data.title}</h1>
        <p>"{data.slogan}"</p>
      </section>
    </header>
  )
}
