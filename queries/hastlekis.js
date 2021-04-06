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
  lektionerkurseritems(where: {title: "Hästlekis"}, first: 1) {
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
      }
    }
  }
}
`;

