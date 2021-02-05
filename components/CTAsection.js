import React from 'react'
import ButtonNavigate from './ButtonNavigate'
import style from './CTAsection.module.scss'

export default function CTAsection() {
  return (
    <section className={style.CTAwrapper}>
      <div className={style.text}>
        <h2>Presentera en ny kurs eller dylikt</h2>
        <p>Skriv en liten text om kursen eller nyheten (det man vill ska synas just nu)</p>
        <ButtonNavigate text="Läs mer" navigate="/lektioner-kurser" />
      </div>
    </section>
  )
}
