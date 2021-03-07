import React, { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.scss";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import cn from "classnames";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={style.navbar}>
      <Link href="/">
        <img className={style.logotype} src="/icons/LogotypVit.svg" alt="Logotyp" />
      </Link>

      <ul
        className={cn({
          [style.list]: showMenu,
          [style.list_hidden]: !showMenu,
        })}
      >
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <AiOutlineClose /> : <BiMenu />}
        </button>
        <li onClick={() => setShowMenu(false)}>
          <Link href="/">Startsida</Link>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <Link href="/stallnytt">Stallnytt</Link>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <Link href="/rida">Lektioner & Kurser</Link>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <Link href="/om-oss">Om oss</Link>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <Link href="/om-oss/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
