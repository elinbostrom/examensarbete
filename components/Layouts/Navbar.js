import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <img className={style.logotype} src="../icons/LogotypVit.svg" alt="Logotyp" />
      </Link>

      <ul>
        <li>
          <Link href="/">Startsida</Link>
        </li>
        <li>
          <Link href="/stallnytt">Stallnytt</Link>
        </li>
        <li>
          <Link href="/rida">Lektioner & Kurser</Link>
        </li>
        <li>
          <Link href="/om-oss">Om oss</Link>
        </li>
        <li>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  )
}
