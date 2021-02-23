import React from "react";
import ButtonNavigate from "../Buttons/ButtonNavigate";
import styles from "./NewsArticle.module.scss";
import NewsGallery from "./NewsGallery";

export default function NewsArticle({ postInfo, date, id }) {
  const { title, information, link, btntext, pictures } = postInfo;
  date = date.replace("T", " | ");

  return (
    <li id={id} className={pictures?.picture1 ? styles.post : styles.postNoPic}>
      <section className={styles.text}>
        <h2>{title}</h2>
        <p className={styles.date}>{date}</p>
        <p>{information}</p>
        {link && <ButtonNavigate text={btntext} navigate={link} link />}
      </section>
      {pictures?.picture1 && <NewsGallery pictures={pictures} />}
    </li>
  );
}
