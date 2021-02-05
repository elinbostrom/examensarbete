import React from 'react'
import style from './Hero.module.scss'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <header className={style.header}>
      <Navbar />
      <section className={style.text}>
        <h1>Här är en titel</h1>
        <p>"Här kommer det en liten välkomnande text som beskriver ridskolans ledord i citatform"</p>
      </section>
    </header>
  )
}
