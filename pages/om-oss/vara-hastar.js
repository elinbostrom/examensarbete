import React, { useContext, useEffect, useState } from 'react'
import styles from '@/styles/AboutUs.module.scss'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'

// Components
import AboutUsLayout from '@/components/Layouts/AboutUsLayout'
import Button from '@/components/Buttons/Button'
import HorseList from '@/components/HorseList'

// get data
import client from '@/apollo/client'
import { HORSES } from '@/queries/horses';

export default function Horses({ horses, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);
  const [activeInfo, setActiveInfo] = useState("Häst");

  // using useEffect to update state setActivePage after rendering the site so it would not be a bad set state
  useEffect(() => { setActivePage("Våra hästar") }, [])

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
      <main className={styles.main_horses}>
        {activeInfo !== "Minneslunden" ? <>
          <h2>Våra Hästar</h2>
          <p className={styles.paragraph}>Lär känna våra fina fyrbenta vänner bättre :)</p>
        </> :
          <>
            <h2>Våra änglar</h2>
            <p className={styles.paragraph}>Här kan du läsa mer om våra fina kollegor som tyvärr tvingats lämna oss 😔</p>
          </>}
        <Button btnText="Häst" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        <Button btnText="Ponny" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        <Button btnText="Minneslunden" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        <HorseList horses={horses} activeInfo={activeInfo} />
      </main>
    </AboutUsLayout>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: HORSES
  });

  return {
    props: {
      horses: data?.horses?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}