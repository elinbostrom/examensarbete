import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { LessonsCoursesContext } from "@/contexts/LessonCoursesProvider";
import styles from "./Submenu.module.scss";
import { menuItemsMobileAboutUs, menuItemsMobileLessonCourses } from "../SubmenuMobile/MenuItems";

export default function Submenu({ page, aboutus }) {
  const { activePage, setActivePage } = useContext(LessonsCoursesContext);

  useEffect(() => {
    setActivePage(page);
  }, []);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {aboutus
          ? menuItemsMobileAboutUs.map(menuItem => (
              <li
                key={menuItem.name}
                className={activePage === menuItem.name ? styles.active_link : styles.link}
              >
                <Link href={menuItem.slug}>{menuItem.name}</Link>
              </li>
            ))
          : menuItemsMobileLessonCourses.map(menuItem => {
              return (
                <li
                  key={menuItem.name}
                  className={activePage === menuItem.name ? styles.active_link : styles.link}
                >
                  <Link href={menuItem.slug}>{menuItem.name}</Link>
                </li>
              );
            })}
      </ul>
    </nav>
  );
}
