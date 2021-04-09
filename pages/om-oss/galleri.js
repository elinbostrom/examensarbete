import AboutUsLayout from '@/components/Layouts/AboutUsLayout'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import React, { useContext, useEffect } from 'react'
import styles from '@/styles/AboutUs.module.scss'
import Gallery from '@/components/Gallery'

// get data
import client from '@/apollo/client'
import { GALLERY } from '@/queries/gallery';

export default function GalleryPage({ gallerys, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);

  useEffect(() => {
    setActivePage("Galleri")
  }, [])

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
      <main className={styles.main}>
        <h2>Galleri</h2>
        <p className={styles.paragraph}>Här kan du se tillbaka på gamla händelser som skett på ridskolan</p>
        <ul className={styles.galleryList}>
          {Array.isArray(gallerys) && gallerys.map(gallery => {
            return <Gallery key={gallery.id} id={gallery.id} data={gallery.galleryInfo} />
          })}
        </ul>
      </main>
    </AboutUsLayout>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: GALLERY
  });

  return {
    props: {
      gallerys: data?.gallerys?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}