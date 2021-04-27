import { useRouter } from "next/router";
import styles from "./SubmenuMobile.module.scss";
import { menuItemsMobileAboutUs, menuItemsMobileLessonCourses } from "./MenuItems";
import { BsChevronExpand } from "react-icons/bs";

export default function SubmenuMobile({ aboutus }) {
  const router = useRouter();

  const handleChoosenValue = slug => {
    router.push(slug);
  };

  return (
    <nav className={styles.navigation}>
      <select onChange={e => handleChoosenValue(e.target.value)} className={styles.select}>
        <option disabled selected>
          Meny
        </option>
        {aboutus
          ? menuItemsMobileAboutUs.map(menuItem => (
              <option key={menuItem.name} value={menuItem.slug}>
                {menuItem.name}
              </option>
            ))
          : menuItemsMobileLessonCourses.map(menuItem => (
              <option key={menuItem.name} value={menuItem.slug}>
                {menuItem.name}
              </option>
            ))}
      </select>
      <BsChevronExpand />
    </nav>
  );
}
