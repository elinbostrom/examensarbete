import { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

export default function Gallery({ id, data }) {
  const { title, link, description, gallery } = data;
  const [activePhoto, setActivePhoto] = useState(gallery.picture1);
  const [pictureAmount, setPictureAmount] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    checkPhotosAmount();
  }, []);

  const checkPhotosAmount = () => {
    let newArr = [];
    const arrOfObj = Object.entries(gallery);
    arrOfObj.map(item => {
      if (item[1] !== null) {
        newArr.push(item);
      }
    });
    setPictureAmount(newArr.length - 1);
  };

  const renderGallery = () => {};

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
          <div className={styles.bigPhoto}>
            <img
              className={styles.activePicture}
              src={activePhoto.sourceUrl}
              alt={activePhoto.altText}
            />
            <button className={styles.before}>
              <MdNavigateBefore />
            </button>
            <button className={styles.next}>
              <MdNavigateNext />
            </button>
          </div>
          <div className={styles.photos}>{gallery.picture1 && renderGallery()}</div>
          <button className={styles.openBtn} onClick={() => setIsOpen(false)}>
            Stäng galleri
          </button>
        </li>
      ) : (
        <li className={styles.gallery}>
          <div className={styles.bigPhoto}>
            <img
              className={styles.thumbnail}
              src={activePhoto.sourceUrl}
              alt={activePhoto.altText}
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
