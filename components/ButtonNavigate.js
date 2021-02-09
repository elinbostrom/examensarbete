import React from 'react'
import { useRouter } from 'next/router'
import style from './ButtonNavigate.module.scss'

export default function ButtonNavigate({ text, navigate, link }) {
  const router = useRouter();

  return (
    <button className={link ? style.link : style.button} onClick={() => router.push(navigate)}>
      {text}
    </button>
  )
}
