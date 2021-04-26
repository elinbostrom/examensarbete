import styles from "./HorseListItem.module.scss";
import { useMemo, useState } from "react";
import { structurePictures } from "@/utils/structurePictures";

export default function HorseListItem({ horse }) {
  const { name, birthyear, breed, description, pictures } = horse;
  const [seeMore, setSeeMore] = useState(false);
  const [activePicture, setActivePicture] = useState(pictures.picture1);

  /* using structurePictures function to structure data before rendering. 
  I need to structure data beacuse ACF free version in 
  Wordpress does not have access to the gallery functions */
  const pictureArr = structurePictures(pictures);

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
            {pictureArr.length &&
              pictureArr.map(picture => (
                <button key={picture.sourceUrl} onClick={() => setActivePicture(picture)}>
                  <img
                    className={styles.galleryImg}
                    src={picture.sourceUrl}
                    alt={picture.altText}
                  />
                </button>
              ))}
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
