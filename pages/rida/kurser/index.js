import LessonsCoursesLayout from '../../../components/Layouts/LessonsCoursesLayout'
import { START_RIDING } from '../../../queries/start-riding'
import client from '../../../apollo/client';
import { MenuItems } from '../../../components/Submenu/MenuItems';
import ButtonCard from '../../../components/ButtonCard'
import styles from '../../../styles/Kurser.module.scss'

export default function index({ heroes }) {

  return (
    <LessonsCoursesLayout heroes={heroes} page="lessoncourses">
      <div className={styles.wrapper}>
        <h2>Våra kurser</h2>
        <h3>Häst</h3>
        {MenuItems.map(item => {
          if (item.category === "Häst") {
            return (
              <ButtonCard info={item} />
            )
          }
        })}
        <h3>Ponny</h3>
        {MenuItems.map(item => {
          if (item.category === "Ponny") {
            return (
              <ButtonCard info={item} />
            )
          }
        })}
      </div>
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