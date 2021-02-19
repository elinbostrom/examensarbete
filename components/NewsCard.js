import React, { useEffect, useState } from 'react'
import ButtonNavigate from './ButtonNavigate'
import style from './NewsCard.module.scss'
import { IoIosArrowForward } from 'react-icons/io'

export default function NewsCard({ obj, activePost, setActivePost }) {
  const [post, setPost] = useState(obj[activePost])
  let { date, id, posts } = post;
  date = date.replace("T", " ");

  if (posts.information.length > 350) {
    posts.information = `${posts.information.slice(0, 350)}...`;
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
      <h3>{posts.title}</h3>
      <p>{posts.information}</p>
      <p>{date}</p>
      <ButtonNavigate text="Läs mer" navigate={`/stallnytt/#${id}`} />
      <button className={style.button_arrow} onClick={handleClick}>
        <IoIosArrowForward />
      </button>
    </article>
  )
}
