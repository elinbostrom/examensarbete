import React from 'react'
import style from './Hero.module.scss'
import Navbar from './Navbar'
import cn from 'classnames'

export default function Hero({ data, page }) {

  return (
    <header className={cn({
      [style.startpage]: page === 'startpage',
      [style.stablenews]: page === 'stablenews',
      [style.lessoncourses]: page === 'lessoncourses',
      [style.aboutus]: page === 'aboutus',
      [style.contact]: page === 'contact'
    })}>
      <Navbar />
      <section className={style.text}>
        <h1>{data.title}</h1>
        <p>{data.slogan}</p>
      </section>
    </header>
  )
}
