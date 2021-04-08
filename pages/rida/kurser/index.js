import styles from '@/styles/Kurser.module.scss'
import { useRouter } from "next/router";

// components
import LessonsCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import { MenuItems } from '@/components/Submenu/MenuItems';

// get data
import { START_RIDING } from '@/queries/start-riding'
import client from '@/apollo/client';

export default function CoursesPage({ heroes }) {
  const router = useRouter();

  return (
    <LessonsCoursesLayout heroes={heroes} page="lessoncourses" activePage="Alla kurser">
      <main className={styles.main}>
        <h2>Våra kurser</h2>
        <section className={styles.course_container}>
          <h3 style={{ marginTop: '1rem', textAlign: 'center' }}>Häst</h3>
          {MenuItems.map(item => {
            if (item.category === "Häst") {
              return (
                <button key={item.id} onClick={() => router.push(item.path)}>{item.title}</button>
              )
            }
          })}
        </section>
        <section className={styles.course_container}>
          <h3 style={{ marginTop: '1rem', textAlign: 'center' }}>Ponny</h3>
          {MenuItems.map(item => {
            if (item.category === "Ponny") {
              return (
                <button key={item.id} onClick={() => router.push(item.path)}>{item.title}</button>
              )
            }
          })}
        </section>
      </main>
    </LessonsCoursesLayout>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: START_RIDING
  });

  return {
    props: {
      heroes: data?.heroes?.nodes
    },
  }
}