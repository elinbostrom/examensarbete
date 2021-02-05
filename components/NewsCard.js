import React, { useEffect, useState } from 'react'
import ButtonNavigate from './ButtonNavigate'
import style from './NewsCard.module.scss'

export default function NewsCard({ obj, activePost, setActivePost }) {
  const [post, setPost] = useState(obj[activePost])
  let { title, text, date, id } = post;

  if (text.length > 120) {
    text = `${text.slice(0, 350)}...`;
  }

  useEffect(() => {
    setPost(obj[activePost])
  }, [activePost])

  const handleClick = () => {
    if (activePost === 4) {
      setActivePost(0)
    }
    else {
      setActivePost(activePost + 1)
    }
  }

  return (
    <article className={style.card}>
      <h3>{title}</h3>
      <p>{text}</p>
      <p>{date}</p>
      <ButtonNavigate text="Läs mer" navigate={`/stallnytt/${id}`} />
      <button className={style.button_arrow} onClick={handleClick}>
        {'>'}
      </button>
    </article>
  )
}
