import React from "react";
import { useRouter } from "next/router";
import style from "./ButtonBlockNavigate.module.scss";

export default function ButtonBlockNavigate({ text, navigate, disableBtn }) {
  const router = useRouter();

  return (
    <button
      className={disableBtn ? style.disabledBtn : style.button}
      onClick={() => router.push(navigate)}
      disabled={disableBtn}
    >
      {disableBtn ? "Kursen fullsatt" : text}
    </button>
  );
}
