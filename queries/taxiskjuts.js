import { gql } from '@apollo/client'

export const TAXISKJUTS = gql`
query TAXISKJUTS {
  heroes(where: {title: "Om oss"}) {
    nodes {
      heroInfo {
        slogan
        title
      }
    }
  }
  newPages(first: 1, where: {title: "Taxiskjuts"}) {
    nodes {
      id
      title
      information {
        infoDescriptionSection
      }
    }
  }
}

`;