import { formatCourseDate } from "@/utils/formatCourseDate";
import { todaysDate } from "@/utils/todaysDate";
import React, { useMemo } from "react";
import CourseCard from "../CourseCard";
import styles from "./CourseList.module.scss";

export default function CourseList({ activeInfo, courses }) {
  const today = todaysDate();

  // using useMemo hook and changeString function to give every course the right slug before the component renders
  const activeCourses = useMemo(() => {
    let arr = [];
    courses &&
      courses.map(item => {
        console.log(item);
        console.log(item.course.category);
        console.log(activeInfo);
        const courseDate = formatCourseDate(item.course.date);
        if (item.course.category === activeInfo && courseDate > today) {
          arr.push(item);
        }
      });
    return arr;
  }, [activeInfo]);

  return (
    <ul className={styles.list}>
      {activeInfo === "Alla kurser" ? (
        courses.map(item => {
          let courseDate = formatCourseDate(item.course.date);
          if (courseDate > today) {
            return <CourseCard key={item.id} id={item.id} courseInfo={item.course} />;
          }
        })
      ) : Array.isArray(activeCourses) && activeCourses.length ? (
        activeCourses.map(item => (
          <CourseCard key={item.id} id={item.id} courseInfo={item.course} />
        ))
      ) : (
        <h3 className={styles.headline}>
          Tyvärr så är inga kurser tillgängliga i denna kategori just nu 😢
        </h3>
      )}
    </ul>
  );
}
