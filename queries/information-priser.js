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
  newPages {
    nodes {
      id
      information {
        informationType
        infoDescriptionSection
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

