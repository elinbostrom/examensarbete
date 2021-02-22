import React, { useState } from "react";
import styles from "./NewsGallery.module.scss";

export default function NewsGallery({ pictures }) {
  const { picture1, picture2, picture3, picture4, picture5 } = pictures;
  const [activePicture, setActivePicture] = useState(picture1);

  return (
    <div className={styles.pictures}>
      <img src={activePicture?.sourceUrl} alt={activePicture?.altText} />
      {picture1 && (
        <button onClick={() => setActivePicture(picture1)}>
          <img src={picture1.sourceUrl} alt={picture1.sourceUrl} />
        </button>
      )}
      {picture2 && (
        <button onClick={() => setActivePicture(picture2)}>
          <img src={picture2.sourceUrl} alt={picture2.sourceUrl} />
        </button>
      )}
      {picture3 && (
        <button onClick={() => setActivePicture(picture3)}>
          <img src={picture3.sourceUrl} alt={picture3.sourceUrl} />
        </button>
      )}
      {picture4 && (
        <button onClick={() => setActivePicture(picture4)}>
          <img src={picture4.sourceUrl} alt={picture4.sourceUrl} />
        </button>
      )}
      {picture5 && (
        <button onClick={() => setActivePicture(picture5)}>
          <img src={picture5.sourceUrl} alt={picture5.sourceUrl} />
        </button>
      )}
    </div>
  );
}
