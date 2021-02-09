import React from 'react'
import ButtonNavigate from './ButtonNavigate';
import styles from './NewsArticle.module.scss'
import NewsGallery from './NewsGallery';

export default function NewsArticle({ postInfo, date, id }) {
  const { title, information, link, btntext, pictures } = postInfo;
  date = date.replace("T", " | ");

  return (
    <li id={id} className={styles.post}>
      <section className={styles.text}>
        <h2>{title}</h2>
        <p>{information}</p>
      </section>
      <p className={styles.date}>{date}</p>
      {link && <ButtonNavigate text={btntext} navigate={link} link />}
      {pictures?.picture1 && <NewsGallery pictures={pictures} />}
    </li>
  )
}
