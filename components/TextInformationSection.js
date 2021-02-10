import React, { useContext } from 'react'
import { LessonsCoursesContext } from '../contexts/LessonCoursesProvider';
import styled from 'styled-components';


export default function TextInformationSection({ data }) {
  const { title, description } = data;
  const { activePage } = useContext(LessonsCoursesContext);

  return (
    <>
      {activePage === "Börja rida" && <Wrapper>
        <h2>{title}</h2>
        <p>{description}</p>
      </Wrapper>}
    </>
  )
}

const Wrapper = styled.section`
text-align: center;
`;