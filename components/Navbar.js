import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div>
        Logo
      </div>

      <ul>
        <li>
          <Link href="/">Startsida</Link>
        </li>
        <li>
          <Link href="/stallnytt">Stallnytt</Link>
        </li>
        <li>
          <Link href="/lektioner-kurser">Lektioner & Kurser</Link>
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
