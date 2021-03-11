import React, { useState } from "react";
import ButtonNavigate from "../Buttons/ButtonNavigate";
import styles from "./NewsArticle.module.scss";
import NewsGallery from "./NewsGallery";

export default function NewsArticle({ postInfo, date, id }) {
  const { title, information, link, btntext, pictures } = postInfo;
  date = date.replace("T", " | ");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <li id={id} className={pictures?.picture1 ? styles.post : styles.postNoPic}>
          <section className={styles.text}>
            <h2>{title}</h2>
            <p className={styles.date}>{date}</p>
            <p>{information}</p>
            {link && <ButtonNavigate text={btntext} navigate={link} link />}
          </section>
          <button className={styles.seeMore} onClick={() => setIsOpen(false)}>
            Stäng inlägg
          </button>
          {pictures?.picture1 && <NewsGallery pictures={pictures} />}
        </li>
      ) : (
        <li id={id} className={styles.closedPost}>
          <section className={styles.text}>
            <h2>{title}</h2>
            <p className={styles.date}>{date}</p>
          </section>
          <button onClick={() => setIsOpen(true)}>Läs mer</button>
        </li>
      )}
    </>
  );
}
