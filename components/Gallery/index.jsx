import { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

export default function Gallery({ id, data }) {
  const { title, link, description, gallery } = data;
  const [activePhoto, setActivePhoto] = useState({
    src: gallery.picture1.sourceUrl,
    alt: gallery.picture1.altText,
  });
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

  const renderGallery = () => {
    let increasingNr = 1;
    const pictureData = Object.entries(gallery);

    return pictureData.map(data => {
      if (data[1] !== null && data[0] === `picture${increasingNr}`) {
        increasingNr++;
        return (
          <button
            key={data[0]}
            onClick={() => setActivePhoto({ src: data[1].sourceUrl, text: data[1].altText })}
            className={styles.photoBtn}
          >
            <img src={data[1].sourceUrl} alt={data[1].altText} />
            <h3>{data[1].title}</h3>
          </button>
        );
      }
    });
  };

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
            <img className={styles.activePicture} src={activePhoto.src} alt={activePhoto.alt} />
            {/* <button className={styles.before}>
              <MdNavigateBefore />
            </button>
            <button className={styles.next}>
              <MdNavigateNext />
            </button> */}
          </div>
          {gallery.picture1 && <div className={styles.photos}>{renderGallery()}</div>}
          <button className={styles.openBtn} onClick={() => setIsOpen(false)}>
            Stäng galleri
          </button>
        </li>
      ) : (
        <li className={styles.gallery}>
          <div className={styles.bigPhoto}>
            <img className={styles.thumbnail} src={activePhoto.src} alt={activePhoto.alt} />
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
