import React, { useContext, useEffect, useState } from 'react'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import styles from '@/styles/AboutUs.module.scss'

// Components
import AboutUsLayout from '@/components/Layouts/AboutUsLayout'
import Wrapper from '@/components/Wrapper'
import Button from '@/components/Buttons/Button'
import HorseList from '@/components/HorseList'

// get data
import client from '@/apollo/client'
import { HORSES } from '@/queries/horses';

export default function Horses({ horses, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);
  const [activeInfo, setActiveInfo] = useState("Häst");
  setActivePage("Våra hästar")

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
      <Wrapper>
        {activeInfo !== "Minneslunden" ? <>
          <h2 className={styles.headline}>Våra Hästar</h2>
          <p className={styles.paragraph}>Lär känna våra fina fyrbenta vänner bättre :)</p>
        </> :
          <>
            <h2 className={styles.headline}>Våra änglar</h2>
            <p className={styles.paragraph}>Här kan du läsa mer om våra fina kollegor som tyvärr tvingats lämna oss 😔</p>
          </>}
        <Button btnText="Häst" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        <Button btnText="Ponny" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        <Button btnText="Minneslunden" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
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