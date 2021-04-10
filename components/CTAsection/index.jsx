import React from "react";
import ButtonNavigate from "../Buttons/ButtonNavigate";
import style from "./CTAsection.module.scss";

export default function CTAsection({ data }) {
  return (
    <section className={style.CTAwrapper}>
      <div className={style.text}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <ButtonNavigate text={data.btnText} navigate={data.link} />
      </div>
    </section>
  );
}
