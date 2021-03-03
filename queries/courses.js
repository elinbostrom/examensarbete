import { gql } from '@apollo/client'

export const COURSES = gql`
query COURSES {
  courses {
    nodes {
      id
      slug
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
  heroes(where: {title: "Lektioner och Kurser"}, first: 1) {
    nodes {
      heroInfo {
        title
        slogan
      }
    }
  }
  lektionerkurseritems(where: {title: "Alla kurser"}, first: 1) {
    nodes {
      information {
        welcome {
          title
          description
        }
        information {
          title
          description
          picture {
            altText
            sourceUrl
          }
        }
        informationOrs {
          title
          description
          picture {
            altText
            sourceUrl
          }
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
  heroes(where: {title: "Lektioner och Kurser"}, first: 1) {
    nodes {
      heroInfo {
        title
        slogan
      }
    }
  }
  informations(where: {title: "Betalningsvillkor & Retur / reklamationsrutiner"}) {
    nodes {
      content(format: RENDERED)
    }
  }
}
`
};