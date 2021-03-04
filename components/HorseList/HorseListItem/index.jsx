import styles from "./HorseListItem.module.scss";
import { useState } from "react";

export default function HorseListItem({ horse }) {
  const { name, birthyear, breed, description, pictures } = horse;
  const [seeMore, setSeeMore] = useState(false);
  const [activePicture, setActivePicture] = useState(pictures.picture1);

  return (
    <li className={seeMore ? styles.horse_more : styles.horse}>
      <div className={styles.pictures}>
        <img
          className={styles.activePicture}
          src={activePicture.sourceUrl}
          alt={activePicture.altText}
        />
        {seeMore && pictures.picture2 && (
          <div className={styles.gallery}>
            <button onClick={() => setActivePicture(pictures.picture1)}>
              <img
                className={styles.galleryImg}
                src={pictures.picture1.sourceUrl}
                alt={pictures.picture1.altText}
              />
            </button>
            {pictures?.picture2 && (
              <button onClick={() => setActivePicture(pictures.picture2)}>
                <img
                  className={styles.galleryImg}
                  src={pictures.picture2.sourceUrl}
                  alt={pictures.picture2.altText}
                />
              </button>
            )}
            {pictures?.picture3 && (
              <button onClick={() => setActivePicture(pictures.picture3)}>
                <img
                  className={styles.galleryImg}
                  src={pictures.picture3.sourceUrl}
                  alt={pictures.picture3.altText}
                />
              </button>
            )}
            {pictures?.picture4 && (
              <button onClick={() => setActivePicture(pictures.picture4)}>
                <img
                  className={styles.galleryImg}
                  src={pictures.picture4.sourceUrl}
                  alt={pictures.picture4.altText}
                />
              </button>
            )}
            {pictures?.picture5 && (
              <button onClick={() => setActivePicture(pictures.picture5)}>
                <img
                  className={styles.galleryImg}
                  src={pictures.picture5.sourceUrl}
                  alt={pictures.picture5.altText}
                />
              </button>
            )}
          </div>
        )}
      </div>
      <section className={styles.text}>
        <h3>{name}</h3>
        {seeMore && (
          <>
            <p className={styles.birthyear}>{birthyear}</p>
            {breed && (
              <div className={styles.breed}>
                <p>Stamtavla</p>
                <p>{breed}</p>
              </div>
            )}
            <p>{description}</p>
          </>
        )}
      </section>
      <button className={styles.seeMoreBtn} onClick={() => setSeeMore(!seeMore)}>
        {seeMore ? "Stäng" : "Läs mer"}
      </button>
    </li>
  );
}
