import React from "react";
import styles from "./ArticleSection.module.scss";
import ButtonBlockNavigate from "../Buttons/ButtonBlockNavigate";

export default function ArticleSection({ data, imgright, button }) {
  const { title, description, picture } = data;

  return (
    <div className={imgright ? styles.right_grid : styles.left_grid}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.img_wrapper}>
        <img src={picture.sourceUrl} alt={picture.altText} />
      </div>
      {button && (
        <ButtonBlockNavigate
          text="Gå till Min Ridskola"
          navigate="https://ww2.minridskola.se/Init_LoggaIn.aspx"
          block
        />
      )}
      {data.btntexthorse && (
        <div className={styles.schema_btns}>
          <ButtonBlockNavigate text="Ridschema Häst" navigate={data.linkhast} />
          <ButtonBlockNavigate text="Ridschema Ponny" navigate={data.linkponny} />
        </div>
      )}
    </div>
  );
}
