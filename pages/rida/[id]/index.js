import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import LessonsCoursesLayout from '@/components/Layouts/LessonsCoursesLayout';
import { COURSE } from '@/queries/courses';
import RegisterForm from '@/components/RegisterForm'
import InstructorCard from '@/components/InstructorCard';
import styles from '@/styles/BookCourse.module.scss'
import { useState } from 'react';
import ReviewBooking from '@/components/ReviewBooking';
import LCLoading from '../loading';

export default function CourseDetail() {
  const router = useRouter()
  const id = router.query.id;
  const [showRegForm, setShowRegForm] = useState(true);
  const [clientInfo, setClientInfo] = useState(null);

  const { data, loading, error } = useQuery(COURSE(id));

  if (loading) return <LCLoading />;
  if (error) return <h1>ERROR</h1>;
  if (!data) return <h1>Not found</h1>;

  const heroes = data.heroes.nodes ?? null;
  const course = data.course.course ?? null;

  return (
    <LessonsCoursesLayout
      heroes={heroes}
      page="lessoncourses"
      activePage="Alla kurser">
      <section className={styles.text}>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </section>
      <section className={styles.form}>
        {!clientInfo && <RegisterForm course={course} setClientInfo={setClientInfo} setShowRegForm={setShowRegForm} />}
        {clientInfo && <ReviewBooking course={course} clientInfo={clientInfo} />}
        <InstructorCard course={course} />
      </section>
    </LessonsCoursesLayout>
  )
}
