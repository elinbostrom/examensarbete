import AboutUsLayout from '@/components/Layouts/AboutUsLayout'
import Wrapper from '@/components/Wrapper'
import { LessonsCoursesContext } from '@/contexts/LessonCoursesProvider'
import React, { useContext, useEffect } from 'react'

// get data
import client from '@/apollo/client'
import { ABOUT_US } from '@/queries/about-us';
import Article from '@/components/Article'

export default function AboutUs({ aboutusposts, heroes }) {
  const { setActivePage } = useContext(LessonsCoursesContext);
  const { description, article } = aboutusposts[0];
  const { sectionOne, sectionTwo, sectionThree } = article;
  console.log(sectionOne);

  useEffect(() => { setActivePage("Om ridskolan") }, [])

  return (
    <AboutUsLayout heroes={heroes} page="aboutus">
      <Wrapper>
        <p style={{ textAlign: 'center', margin: '0 2rem 4rem 2rem' }}>{description.description}</p>
        <Article data={sectionOne} imgRight />
        <Article data={sectionTwo} imgRight />
        <Article data={sectionThree} imgRight />
      </Wrapper>
    </AboutUsLayout>
  )
}

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: ABOUT_US
  });

  return {
    props: {
      aboutusposts: data?.aboutusposts?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}