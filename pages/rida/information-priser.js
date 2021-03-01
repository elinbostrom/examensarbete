import { useEffect, useState } from 'react';

// Components
import LessonCoursesLayout from '@/components/Layouts/LessonsCoursesLayout'
import PriceList from '@/components/PriceList';

// Styling
import styles from '@/styles/InformationPrices.module.scss'

// get data
import client from '@/apollo/client'
import { INFORMATION_PRISER } from '@/queries/information-priser';
import Button from '@/components/Buttons/Button';
import Wrapper from '@/components/Wrapper';


export default function InformationPrices({ heroes, pricepages, informations }) {
  const [activeInfo, setActiveInfo] = useState("Priser");
  console.log(informations);

  useEffect(() => { }, [activeInfo])

  const createMarkup = (content) => {
    return { __html: content }
  };

  return (
    <LessonCoursesLayout heroes={heroes} page="lessoncourses">
      <Wrapper>
        <Button btnText="Priser" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        <Button btnText="Fakturainfo" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        <Button btnText="Igenridning & Avbokning" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
        <Button btnText="Uppsägning" setActiveInfo={setActiveInfo} activeInfo={activeInfo} />
      </Wrapper>
      {activeInfo === "Priser" &&
        <Wrapper>
          <h2>{activeInfo}</h2>
          <PriceList data={pricepages} category="Senior" />
          <PriceList data={pricepages} category="Junior" />
          <PriceList data={pricepages} category="Hästlekis" />
          {Array.isArray(informations) && informations.map(item => {
            const category = item.informationtype.informationstype;
            if (category === "Prisinformation") {
              return (
                <div className={styles.ownHtml} dangerouslySetInnerHTML={createMarkup(item.content)} />
              )
            }
          })
          }
        </Wrapper>
      }
      {Array.isArray(informations) && informations.map(item => {
        const category = item.informationtype.informationstype;
        if (category === activeInfo) {
          return (
            <Wrapper>
              <h2>{activeInfo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(item.content)} />
            </Wrapper>
          )
        }
      })
      }

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