import { useEffect, useState } from 'react';

// Components
import LessonCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import PriceList from '@/components/PriceList';
import Button from '@/components/Buttons/Button';

// Utils
import { createMarkup } from '@/utils/createMarkup';

// Styling
import styles from '@/styles/InformationPrices.module.scss'

// get data
import client from '@/apollo/client'
import { INFORMATION_PRISER } from '@/queries/information-priser';

export default function InformationPrices({ heroes, pricepages, informations }) {
  const [activeInfo, setActiveInfo] = useState("Priser");

  useEffect(() => { }, [activeInfo])

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses">
      <main className={styles.main}>
        <div className={styles.btn_container}>
          <Button btnText="Priser" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
          <Button btnText="Fakturainfo" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
          <Button btnText="Igenridning & Avbokning" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
          <Button btnText="Uppsägning" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        </div>
        {activeInfo === "Priser" &&
          <section className={styles.info_container}>
            <h2>{activeInfo}</h2>
            <PriceList data={pricepages} category="Senior" />
            <PriceList data={pricepages} category="Junior" />
            <PriceList data={pricepages} category="Hästlekis" />
            {Array.isArray(informations) && informations.map(item => {
              const category = item.informationtype.informationstype;
              if (category === "Prisinformation") {
                return (
                  <div key={item.id} dangerouslySetInnerHTML={createMarkup(item.content)} />
                )
              }
            })
            }
          </section>
        }
        {Array.isArray(informations) && informations.map(item => {
          const category = item.informationtype.informationstype;
          if (category === activeInfo) {
            return (
              <section className={styles.info_container} key={item.id}>
                <h2>{activeInfo}</h2>
                <div dangerouslySetInnerHTML={createMarkup(item.content)} />
              </section>
            )
          }
        })
        }
      </main>

    </LessonCoursesLayout>
  )
}


export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: INFORMATION_PRISER
  });

  return {
    props: {
      heroes: data?.heroes?.nodes,
      pricepages: data?.pricepages?.nodes,
      informations: data?.informations?.nodes
    },
  }
}