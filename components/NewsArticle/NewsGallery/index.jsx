import { structurePictures } from "@/utils/structurePictures";
import React, { useState } from "react";
import styles from "./NewsGallery.module.scss";

export default function NewsGallery({ pictures }) {
  const [activePicture, setActivePicture] = useState(pictures.picture1);
  const picturesArr = structurePictures(pictures);

  return (
    <div className={styles.pictures}>
      <img src={activePicture?.sourceUrl} alt={activePicture?.altText} />
      {picturesArr.length &&
        picturesArr.map(picture => (
          <button key={picture.sourceUrl} onClick={() => setActivePicture(picture)}>
            <img src={picture.sourceUrl} alt={picture.altText} />
          </button>
        ))}
    </div>
  );
}
