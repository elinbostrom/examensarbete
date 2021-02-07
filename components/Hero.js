import React from 'react'
import style from './Hero.module.scss'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <header className={style.header}>
      <Navbar />
      <section className={style.text}>
        <h1>BOSSE</h1>
        <p>"Här är en hemsida gjord av Sofia Boström"</p>
      </section>
    </header>
  )
}
