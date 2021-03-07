import AboutUsLayout from '@/components/Layouts/AboutUsLayout'
import Wrapper from '@/components/Wrapper'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import React, { useContext, useEffect } from 'react'
import styles from '@/styles/AboutUs.module.scss'
import Gallery from '@/components/Gallery'

// get data
import client from '@/apollo/client'
import { CONTACT } from '@/queries/contact';

export default function ContactPage({ contacts, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);
  console.log(contacts);

  useEffect(() => {
    setActivePage("Kontakt")
  }, [])

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
    </AboutUsLayout>
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