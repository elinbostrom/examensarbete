import React from 'react'

import { IoTimeOutline, IoPersonCircleOutline } from 'react-icons/io5'
import { CARRIERS } from '@/queries/carriers'
import client from '@/apollo/client'
import Layout from '@/components/Layouts';
import ButtonNavigate from '@/components/Buttons/ButtonNavigate';
import styles from '@/styles/AboutUs.module.scss'

export default function Carrier({ carriers }) {
  const heroObj = {
    title: "Lediga tjänster",
    slogan: "Vill du jobba på en härlig arbetsplats? Här finner du våra lediga tjänster...",
  };

  return (
    <Layout data={heroObj} page="aboutus">
      <main className={styles.carriers}>
        <section>
          <div className={styles.carriersText}>
            <h2>Välkommen till vår karriärsida</h2>
            <p>Bli en del av vårt härliga stallgäng! :)</p>
            <ButtonNavigate navigate="/om-oss/personal" text="Vårt team" />
          </div>
          {Array.isArray(carriers) && carriers.length ? (
            carriers.map(work => (
              work.info.show && <div key={work.id} className={styles.carriersCard}>
                <h3>{work.info.title}</h3>
                <strong>
                  <IoPersonCircleOutline />
                  {work.info.work}
                </strong>
                <strong>
                  <IoTimeOutline />
                  {work.info.time}
                </strong>
                <p>{work.info.description}</p>
                <ButtonNavigate navigate="mailto:anna@vendelsoridskola.se" text="Ansök till tjänsten" />
              </div>
            ))

          ) : (
            <h3>Inga lediga tjänster tillgängliga just nu... 🙁</h3>
          )}
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {

  const { data, loading, networkStatus } = await client.query({
    query: CARRIERS
  });

  return {
    props: {
      carriers: data?.carriers?.nodes
    },
  }
}