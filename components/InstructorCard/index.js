import CourseList from '@/components/CourseList'
import styles from './InstructorCard.module.scss'

export default function InstructorCard({ course }) {
  return (
    <div className={styles.card}>
      <img src={course.picture.sourceUrl} alt={course.picture.altText} />
      <div className={styles.text}>
        <p><span>Instruktör: </span>{course.instructor}</p>
        <CourseList courseInfo={course} />
      </div>
    </div>
  )
}
