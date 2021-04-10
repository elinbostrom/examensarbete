import { gql } from '@apollo/client'

export const ABOUT_US = gql`
query ABOUT_US {
  heroes(where: {title: "Om oss"}) {
    nodes {
      heroInfo {
        title
        slogan
      }
    }
  }
  newPages(first: 1, where: {title: "Om ridskolan"}) {
    nodes {
      id
      information {
        aboutUs {
          title
          description
          history
        }
      }
    }
  }
}
`;