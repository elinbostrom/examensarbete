import Layout from '@/components/Layouts'
import Wrapper from '@/components/Wrapper'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import React, { useContext, useEffect } from 'react'
import styles from '@/styles/AboutUs.module.scss'
import Gallery from '@/components/Gallery'

// get data
import client from '@/apollo/client'
import { CONTACT } from '@/queries/contact';
import ContactForm from '@/components/ContactForm'

export default function ContactPage({ contacts, heroes }) {
  const heroInfo = heroes[0].heroInfo;
  const { setActivePage } = useContext(LessonsCoursesContext);
  const { info, openingHours } = contacts[0];
  const { openinghours, stableClosed, startFinish } = openingHours;

  useEffect(() => {
    setActivePage("Kontakt")
  }, [])

  const renderStableClosed = (data) => {
    if (data.date === null) return
    else {
      return <li><span>{data.date},</span><p>{data.description}</p></li>
    }
  }

  return (
    <Layout data={heroInfo} page="contact">
      <div className={styles.contact}>

        <div className={styles.wrapper}>
          <section>
            <h3>Öppettider</h3>
            <ul>
              <li><span>Mån-Tor: </span><p>{openinghours.montors}</p></li>
              <li><span>Fre: </span><p>{openinghours.friday}</p></li>
              <li><span>Helger: </span><p>{openinghours.weekends}</p></li>
            </ul>

            <p>Stallet har lunchstängt på vardagar mellan {openinghours.closedforlunch}.</p>
          </section>
          <section>
            <h3>Stallet är stängt</h3>
            <ul>
              {renderStableClosed(stableClosed.closed1)}
              {renderStableClosed(stableClosed.closed2)}
              {renderStableClosed(stableClosed.closed3)}
              {renderStableClosed(stableClosed.closed4)}
              {renderStableClosed(stableClosed.closed5)}
              {renderStableClosed(stableClosed.closed6)}
              {renderStableClosed(stableClosed.closed7)}
              {renderStableClosed(stableClosed.closed8)}
            </ul>
          </section>
          <section>
            <h3>Terminsstart & avslut</h3>
            <ul>
              {startFinish.firstDayHt && <li><span>Höstterminens första dag </span><p>{startFinish.firstDayHt}</p></li>}
              {startFinish.lastDayHt && <li><span>Höstterminens sista dag </span><p>{startFinish.lastDayHt}</p></li>}
              {startFinish.firstDayVt && <li><span>Vårterminens första dag </span><p>{startFinish.firstDayVt}</p></li>}
              {startFinish.lastDayVt && <li><span>Vårterminens första dag </span><p>{startFinish.lastDayVt}</p></li>}
            </ul>
          </section>
          <section>
            <h3 style={{ textAlign: 'center' }}>Kontaktformulär</h3>
            <p style={{ textAlign: 'center', paddingTop: '0.5rem' }}>Ring oss på <span>{info.phone}</span>eller fyll i formuläret så återkommer vi!</p>
            <ContactForm email={info.email} />
          </section>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: CONTACT
  });

  return {
    props: {
      contacts: data?.contacts?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}