import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import LessonsCoursesLayout from '../../../components/Layouts/LessonsCoursesLayout';
import { COURSE } from '../../../queries/courses';
import RegisterForm from '@/components/RegisterForm'
import InstructorCard from '@/components/InstructorCard';
import styles from '../../../styles/BookCourse.module.scss'

export default function CourseDetail() {
  const router = useRouter()
  const id = router.query.id;

  const { data, loading, error } = useQuery(COURSE(id));

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>ERROR</h1>;
  if (!data) return <h1>Not found</h1>;

  const heroes = data.heroes.nodes ?? null;
  const course = data.course.course ?? null;
  console.log(course);

  return (
    <LessonsCoursesLayout heroes={heroes} page="lessoncourses">
      <section className={styles.text}>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </section>
      <section className={styles.form}>
        <RegisterForm course={course} />
        <InstructorCard course={course} />
      </section>
    </LessonsCoursesLayout>
  )
}
