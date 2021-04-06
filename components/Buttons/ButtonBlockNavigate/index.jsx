import React from "react";
import { useRouter } from "next/router";
import style from "./ButtonBlockNavigate.module.scss";

export default function ButtonBlockNavigate({ text, navigate }) {
  const router = useRouter();

  return (
    <button className={style.button} onClick={() => router.push(navigate)}>
      {text}
    </button>
  );
}
