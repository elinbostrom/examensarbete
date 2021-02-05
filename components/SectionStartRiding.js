import React from 'react'
import style from './SectionStartRiding.module.scss'
import ButtonNavigate from './ButtonNavigate'

export default function SectionStartRiding() {
  return (
    <section className={style.wrapper}>
      <div className={style.text}>
        <h2>Vill du börja rida hos oss?</h2>

        <p>Text om att börja rida på ridskolan Text om att börja rida på ridskolan Text om att börja rida på ridskolan Text om att börja rida på ridskolan Text om att börja rida på ridskolan Text om at</p>
        <p>Text om att börja rida på ridskolan Text om att börja rida Text om att börja rida på ridskolan Text om att börja rida på ridskolan Text om att börja rida på ridskolan Text om att börja rida på ridskolan</p>
        <ButtonNavigate text="Läs mer" navigate="/om-oss" />
      </div>
    </section>
  )
}
