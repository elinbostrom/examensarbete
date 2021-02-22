import styles from "./CourseCard.module.scss";
import ButtonBlockNavigate from "../Buttons/ButtonBlockNavigate";
import CourseList from "../CourseList";
import { useEffect, useState } from "react";

export default function CourseCard({ id, courseInfo }) {
  const { title, instructor, description } = courseInfo;
  const [shortenDescription, setShortenDescription] = useState(false);

  useEffect(() => {
    if (description.length > 350) {
      setShortenDescription(true);
    }
  }, []);

  return (
    <article className={styles.text}>
      <h3>{title}</h3>
      <p className={styles.instructor}>
        <span>Instruktör:</span> {instructor}
      </p>
      <CourseList courseInfo={courseInfo} />
      <ButtonBlockNavigate text="Anmäl dig till kursen" navigate={`/rida/${id}`} />
      {shortenDescription ? (
        <>
          <p className={styles.description}>
            {`${description.slice(0, 350)}...`}
            <button className={styles.btnReadMore} onClick={() => setShortenDescription(false)}>
              Läs mer
            </button>
          </p>
        </>
      ) : (
        <p className={styles.description}>{description}</p>
      )}
    </article>
  );
}
