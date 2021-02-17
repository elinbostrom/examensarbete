import React, { useContext } from 'react'
import { LessonsCoursesContext } from '../contexts/LessonCoursesProvider';
import styles from './TextInformationSection.module.scss';


export default function TextInformationSection({ data, name }) {
  const { title, description } = data;
  const { activePage } = useContext(LessonsCoursesContext);

  return (
    <>
      {activePage === name && <section className={styles.wrapper}>
        <h2>{title}</h2>
        <p>{description}</p>
      </section>}
    </>
  )
}