import styles from "./CourseCard.module.scss";
import ButtonBlockNavigate from "../Buttons/ButtonBlockNavigate";
import CourseInfoList from "../CourseInfoList";
import { useState } from "react";

export default function CourseCard({ courseInfo }) {
  const { category, title, instructor, description } = courseInfo;
  const [shortenDescription, setShortenDescription] = useState(() => {
    if (description.length > 350) {
      return true;
    }
  });

  return (
    <article className={styles.text}>
      <h3>{title}</h3>
      <p className={styles.instructor}>
        <span>Instruktör:</span> {instructor}
      </p>
      <p className={styles.category}>
        <span>Kategori:</span> {category}
      </p>
      <CourseInfoList courseInfo={courseInfo} />
      <ButtonBlockNavigate
        text="Anmäl dig till kursen via Min ridskola"
        navigate="https://ww2.minridskola.se/Init_LoggaIn.aspx"
        disableBtn={courseInfo.spots.left === null}
      />
      <p className={styles.description}>
        {shortenDescription ? `${description.slice(0, 350)}...` : description}
        <button
          className={styles.btnReadMore}
          onClick={() => setShortenDescription(!shortenDescription)}
        >
          {shortenDescription ? "Läs mer" : "Minimera text"}
        </button>
      </p>
    </article>
  );
}
