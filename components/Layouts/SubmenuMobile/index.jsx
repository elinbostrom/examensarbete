import { useRouter } from "next/router";
import styles from "./SubmenuMobile.module.scss";
import { LessonsCoursesContext } from "@/contexts/LessonCoursesProvider";
import { menuItemsMobileAboutUs, menuItemsMobileLessonCourses } from "./MenuItems";
import { BsChevronExpand } from "react-icons/bs";
import { useEffect, useContext } from "react";
import { GlobalContext } from "@/contexts/GlobalContextProvider";

export default function SubmenuMobile({ page, aboutus }) {
  const { activePage, setActivePage } = useContext(LessonsCoursesContext);
  const { showMenu } = useContext(GlobalContext);
  const router = useRouter();

  const handleChoosenValue = slug => {
    router.push(slug);
  };

  useEffect(() => {
    setActivePage(page);
  }, []);

  return (
    <nav className={showMenu ? styles.hidden : styles.navigation}>
      <select onChange={e => handleChoosenValue(e.target.value)} className={styles.select}>
        <option disabled selected>
          Meny
        </option>
        {aboutus
          ? menuItemsMobileAboutUs.map(menuItem => {
              if (activePage !== menuItem.name)
                return (
                  <option key={menuItem.name} value={menuItem.slug}>
                    {menuItem.name}
                  </option>
                );
            })
          : menuItemsMobileLessonCourses.map(menuItem => {
              if (activePage !== menuItem.name)
                return (
                  <option key={menuItem.name} value={menuItem.slug}>
                    {menuItem.name}
                  </option>
                );
            })}
      </select>
      <BsChevronExpand />
    </nav>
  );
}
