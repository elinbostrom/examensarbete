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
        showSpots
        spots {
          left
          total
        }
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
  newPages(first: 1, where: {title: "Alla kurser"}) {
    nodes {
      id
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