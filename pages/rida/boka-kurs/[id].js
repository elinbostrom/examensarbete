import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import LessonsCoursesLayout from '../../../components/Layouts/LessonsCoursesLayout';
import { COURSE } from '../../../queries/courses';

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
      <section>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </section>
    </LessonsCoursesLayout>
  )
}
