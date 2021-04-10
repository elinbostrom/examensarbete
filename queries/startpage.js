import { gql } from "@apollo/client";

export const STARTPAGE = gql`
query STARTPAGE {
   heroes(where: {title: "Startsida"}) {
    nodes {
      id
      heroInfo {
        title
        slogan
      }
    }
  }
  newPages(first: 1) {
    nodes {
      information {
        startpage {
          cta {
            title
            description
            link
            btnText
          }
          startRiding {
            title
            description
          }
        }
      }
    }
  }
  stablenews(first: 5) {
    nodes {
      id
      slug
      posts {
        title
        information
      }
      date
    }
  }
}
`