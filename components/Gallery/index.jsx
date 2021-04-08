import { useMemo, useState } from "react";
import styles from "./Gallery.module.scss";
import { AiOutlineLink } from "react-icons/ai";
import ImageGallery from "react-image-gallery";

export default function Gallery({ data }) {
  const { title, link, description, gallery } = data;
  const pictureData = Object.entries(gallery);
  const [isOpen, setIsOpen] = useState(false);
  const pictureAmount = useMemo(() => {
    let newArr = pictureData.filter(item => item[1] !== null);
    return newArr.length - 1;
  }, [gallery]);
  const galleryArr = useMemo(() => {
    let arr = [];
    const filtredArr = pictureData.filter(item => item[1] !== null && item[0].includes("picture"));
    filtredArr.map(picture =>
      arr.push({ original: picture[1].sourceUrl, thumbnail: picture[1].sourceUrl })
    );
    return arr;
  }, [gallery]);

  return (
    <>
      {isOpen ? (
        <li className={styles.openGallery}>
          <section className={styles.text}>
            <h3>{title}</h3>
            {description && <p className={styles.description}>{description}</p>}
            {link && (
              <a href={link}>
                <AiOutlineLink /> Mer information
              </a>
            )}
          </section>
          <ImageGallery
            items={galleryArr}
            showBullets={true}
            showPlayButton={false}
            showFullscreenButton={false}
          />
          <button className={styles.openBtn} onClick={() => setIsOpen(false)}>
            Stäng galleri
          </button>
        </li>
      ) : (
        <li className={styles.gallery}>
          <div className={styles.bigPhoto}>
            <img
              className={styles.thumbnail}
              src={gallery.picture1.sourceUrl}
              alt={gallery.picture1.altText}
            />
          </div>
          <h3>{title}</h3>
          <p className={styles.pictureAmount}>{pictureAmount} bilder</p>
          <button className={styles.openBtn} onClick={() => setIsOpen(true)}>
            Öppna galleri
          </button>
        </li>
      )}
    </>
  );
}
