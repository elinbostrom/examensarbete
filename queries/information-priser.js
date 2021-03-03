import { gql } from '@apollo/client'

export const INFORMATION_PRISER = gql`
query INFORMATION_PRISER {
  pricepages(where: {orderby: {field: DATE, order: ASC}}, first: 30) {
    nodes {
      id
      priceitem {
        title
        cost
        category
        description
        orsMedlem
      }
    }
  }
  informations(last: 1) {
    nodes {
      content
      id
      informationtype {
        informationstype
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
}
`;

