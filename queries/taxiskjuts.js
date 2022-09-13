import { gql } from '@apollo/client'

export const TAXISKJUTS = gql`
query TAXISKJUTS {
  heroes(where: {title: "Lektioner och Kurser"}, first: 1) {
    nodes {
      heroInfo {
        title
        slogan
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