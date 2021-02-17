import { gql } from '@apollo/client'

export const COURSES = gql`
query COURSES {
  courses {
    nodes {
      id
      course {
        title
        time
        spots
        price
        level
        instructor
        description
        date
        category
        picture {
          altText
          sourceUrl
        }
      }
    }
  }
}
`;

export function COURSE(id) {
  return gql`
query COURSE {
  course(id: "${id}") {
    course {
      title
      time
      spots
      price
      level
      instructor
      description
      date
      category
      picture {
        altText
        sourceUrl
      }
    }
  }
}
`
};