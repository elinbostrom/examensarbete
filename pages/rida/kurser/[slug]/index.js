import { useRouter } from 'next/router'
import LessonCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import CourseCard from '@/components/CourseCard'
import styles from '@/styles/CourseDetailpage.module.scss'

// get data
import client from '@/apollo/client';
import { COURSES } from '@/queries/courses';
import { useEffect, useState } from 'react';
import TextInformationSection from '@/components/TextInformationSection';


export default function index({ courses, heroes, lektionerkurseritems }) {
  const router = useRouter()
  const slug = router.query.slug;
  const [activeCourses, setActiveCourses] = useState(null);
  const { information } = lektionerkurseritems[0];
  console.log(information);

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
      <TextInformationSection data={information.welcome} name="Alla kurser" />
      <h3>Kommande kurser</h3>
      <div className={styles.card}>
        {Array.isArray(activeCourses) && activeCourses.map(item =>
          <CourseCard key={item.id} id={item.id} slug={slug} courseInfo={item.course} />)}
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
      heroes: data?.heroes?.nodes,
      lektionerkurseritems: data?.lektionerkurseritems?.nodes
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