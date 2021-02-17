import Link from 'next/link'
import React, { useContext } from 'react'
import { LessonsCoursesContext } from '../contexts/LessonCoursesProvider'
import styles from './SubNavigation.module.scss'

export default function SubNavigation() {
  const { activePage, setActivePage } = useContext(LessonsCoursesContext);

  return (
    <nav className={styles.navigation}>
      <ul>
        <li
          className={activePage === "Börja rida" ? styles.active_link : null}
          onClick={() => setActivePage("Börja rida")}>
          <Link href="/lektioner-kurser">Börja rida</Link>
        </li>
        <li
          className={activePage === "Kurser" ? styles.active_link : null}
          onClick={() => setActivePage("Kurser")}>
          <Link href="/lektioner-kurser/#kurser">Kurser</Link>
        </li>
        <li
          className={activePage === "Hästlekis" ? styles.active_link : null}
          onClick={() => setActivePage("Hästlekis")}>
          <Link href="/lektioner-kurser/#hastlekis">Hästlekis</Link>
        </li>
        <li
          className={activePage === "Information & Priser" ? styles.active_link : null}
          onClick={() => setActivePage("Information & Priser")}>
          <Link href="/lektioner-kurser/#information-priser">Information & Priser</Link>
        </li>
      </ul>
    </nav>
  )
}
