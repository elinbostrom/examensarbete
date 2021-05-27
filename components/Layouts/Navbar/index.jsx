import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.scss";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import cn from "classnames";
import { GlobalContext } from "@/contexts/GlobalContextProvider";

export default function Navbar() {
  const { showMenu, setShowMenu } = useContext(GlobalContext);
  const [navbarPosition, setNavbarPosition] = useState("0");

  useEffect(() => {
    let scrollPosition = window.pageYOffset;

    window.onscroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (scrollPosition > currentScrollPosition) {
        setNavbarPosition("0");
      } else {
        if (currentScrollPosition < 100) {
          setNavbarPosition("0");
        } else {
          setNavbarPosition("-100px");
        }
      }

      scrollPosition = currentScrollPosition;
    };
  }, []);

  return (
    <nav className={style.navbar} style={{ top: navbarPosition }}>
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
