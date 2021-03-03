import { gql } from '@apollo/client'

export const EMPLOYEES = gql`
query EMPLOYEES {
  heroes(where: {title: "Om oss"}) {
    nodes {
      heroInfo {
        slogan
        title
      }
    }
  }
  employees(first: 50, where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
      id
      info {
        name
        title
        description
        number
        email
        picture {
          altText
          sourceUrl
        }
      }
    }
  }
}
`;