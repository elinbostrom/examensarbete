import { useEffect, useState, useContext } from 'react';
import { LessonsCoursesContext } from "@/contexts/LessonCoursesProvider";

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

export default function InformationPrices({ heroes, pricepages, pageInfo }) {
  const { setActivePage, activePage } = useContext(LessonsCoursesContext);
  const [activeInfo, setActiveInfo] = useState("Priser");
  useEffect(() => { }, [activeInfo])
  useEffect(() => { setActivePage("Information & Priser") }, [])

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses" activePage={activePage}>
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
            {Array.isArray(pageInfo) && pageInfo.map(item => {
              const category = item.information.informationType;
              if (category === "Prisinformation") {
                return (
                  <div key={item.id} dangerouslySetInnerHTML={createMarkup(item.information.infoDescriptionSection)} />
                )
              }
            })
            }
          </section>
        }
        {Array.isArray(pageInfo) && pageInfo.map(item => {
          const category = item.information.informationType;
          if (category === activeInfo) {
            return (
              <section className={styles.info_container} key={itemid}>
                <h2>{activeInfo}</h2>
                <div dangerouslySetInnerHTML={createMarkup(item.information.infoDescriptionSection)} />
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
      pageInfo: data?.newPages?.nodes
    },
  }
}