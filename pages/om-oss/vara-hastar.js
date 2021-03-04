import AboutUsLayout from '@/components/Layouts/AboutUsLayout'
import Wrapper from '@/components/Wrapper'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import React, { useContext, useEffect, useState } from 'react'
import styles from '@/styles/AboutUs.module.scss'

// get data
import client from '@/apollo/client'
import { HORSES } from '@/queries/horses';
import Button from '@/components/Buttons/Button'
import HorseList from '@/components/HorseList'

export default function Horses({ horses, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);
  const [activeInfo, setActiveInfo] = useState("Häst");

  useEffect(() => {
    setActivePage("Våra hästar")
  }, [])

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
      <Wrapper>
        <h2 className={styles.headline}>Våra Hästar</h2>
        <p className={styles.paragraph}>Lär känna våra fina fyrbenta vänner bättre :)</p>
        <Button btnText="Häst" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        <Button btnText="Ponny" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        <HorseList horses={horses} activeInfo={activeInfo} />
      </Wrapper>
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