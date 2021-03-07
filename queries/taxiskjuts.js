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
  informations(where: {title: "Taxiskjuts"}, first: 1) {
    nodes {
      content
      title
    }
  }
}

`;