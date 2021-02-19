import { useRouter } from 'next/router'
import LessonCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import CourseCard from '@/components/CourseCard'
import styles from '../../../styles/CourseDetailPage.module.scss'

// get data
import client from '../../../apollo/client';
import { COURSES } from '../../../queries/courses';
import { useEffect, useState } from 'react';

export default function index({ courses, heroes }) {
  const router = useRouter()
  const slug = router.query.slug;
  const [activeCourses, setActiveCourses] = useState(null);

  useEffect(() => {
    let arr = [];
    courses.map(item => {
      const category = changeString(item.course.category);
      if (category === slug) {
        arr.push(item)
      }
    })
    setActiveCourses(arr);
  }, [slug])


  const changeString = (string) => {
    let newString = string.replace('ä', 'a');
    newString = newString.replace(' ', '-');
    newString = newString.toLowerCase();
    return newString;
  }

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses">
      <h2>Kommande kurser</h2>
      <div className={styles.card}>
        {Array.isArray(activeCourses) && activeCourses.map(item =>
          <CourseCard key={item.id} id={item.id} courseInfo={item.course} />)}
      </div>
    </LessonCoursesLayout>
  )
}


export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: COURSES
  });

  return {
    props: {
      courses: data?.courses?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      '/rida/kurser/dressyr-hast',
      '/rida/kurser/hoppning-hast',
      '/rida/kurser/sommarkurser-hast',
      '/rida/kurser/julkurser-hast',
      '/rida/kurser/ovrigt-hast',
      '/rida/kurser/dressyr-ponny',
      '/rida/kurser/hoppning-ponny',
      '/rida/kurser/sommarkurser-ponny',
      '/rida/kurser/julkurser-ponny',
      '/rida/kurser/ovrigt-ponny',
    ],
    fallback: true,
  }
}