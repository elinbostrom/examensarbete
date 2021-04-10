import React from "react";
import style from "./SectionStartRiding.module.scss";
import ButtonNavigate from "../Buttons/ButtonNavigate";

export default function SectionStartRiding({ data }) {
  console.log({ data });

  return (
    <section className={style.wrapper}>
      <div className={style.text}>
        <h2>{data.title}</h2>

        <p>{data.description}</p>
        <ButtonNavigate text="Läs mer" navigate="/lektioner-kurser" />
      </div>
    </section>
  );
}
