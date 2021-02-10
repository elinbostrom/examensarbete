import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

// get data
import client from '../apollo/client'
import { START_RIDING } from '../queries/start-riding';
import SubNavigation from '../components/SubNavigation';
import LessonCoursesProvider from '../contexts/LessonCoursesProvider';
import TextInformationSection from '../components/TextInformationSection';

export default function LektionerKurser({ heroes, lektionerkurseritems }) {
  const { heroInfo } = heroes[0];
  const { borjarida } = lektionerkurseritems[0];

  return (
    <LessonCoursesProvider>
      <Layout data={heroInfo}>
        <SubNavigation />
        <MainWrapper>
          <TextInformationSection data={borjarida.welcome} />
        </MainWrapper>
      </Layout>
    </LessonCoursesProvider>
  )
}

const MainWrapper = styled.main`
max-width: 1100px;
width: 100%;
background: white;
margin: 0 auto;
box-shadow: 1px 1px 1px 1px black;
padding: 4rem 3rem;
`;

export async function getStaticProps(context) {

  const { data, loading, networkStatus } = await client.query({
    query: START_RIDING
  });

  return {
    props: {
      lektionerkurseritems: data?.lektionerkurseritems?.nodes,
      heroes: data?.heroes?.nodes
    },
  }
}