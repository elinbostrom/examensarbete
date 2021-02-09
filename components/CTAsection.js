import React from 'react'
import ButtonNavigate from './ButtonNavigate'
import style from './CTAsection.module.scss'

export default function CTAsection({ data }) {
  return (
    <section className={style.CTAwrapper}>
      <div className={style.text}>
        <h2>{data.titlecta}</h2>
        <p>{data.descriptioncta}</p>
        <ButtonNavigate text={data.btnText} navigate={data.link} />
      </div>
    </section>
  )
}
