import { gql } from '@apollo/client'

export const HASTLEKIS = gql`
query HASTLEKIS {
  courses {
    nodes {
      id
      slug
      course {
        title
        time
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
  newPages(first: 1, where: {title: "Hästlekis"}) {
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
      }
    }
  }
}
`;

