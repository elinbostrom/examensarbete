import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { LessonsCoursesContext } from "@/contexts/LessonCoursesProvider";
import Dropdown from "./Dropdown";
import styles from "./Submenu.module.scss";

export default function Submenu({ page }) {
  const { activePage, setActivePage } = useContext(LessonsCoursesContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActivePage(page);
  }, []);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li
          className={activePage === "Börja rida" ? styles.active_link : styles.link}
          onMouseEnter={() => setIsOpen(false)}
        >
          <Link href="/rida">Börja rida</Link>
        </li>
        <li
          className={activePage === "Alla kurser" ? styles.active_link : styles.link}
          onMouseEnter={() => setIsOpen(true)}
        >
          <Link href="/rida/kurser">Alla kurser</Link>
        </li>
        <li
          className={activePage === "Hästlekis" ? styles.active_link : styles.link}
          onMouseEnter={() => setIsOpen(false)}
        >
          <Link href="/rida/hastlekis">Hästlekis</Link>
        </li>
        <li
          className={activePage === "Information & Priser" ? styles.active_link : styles.link}
          onMouseEnter={() => setIsOpen(false)}
        >
          <Link href="/rida/information-priser">Information & Priser</Link>
        </li>
        {isOpen && <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} setActivePage={setActivePage} />}
      </ul>
    </nav>
  );
}
