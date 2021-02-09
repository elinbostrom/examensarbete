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
  startpageitems(first: 1) {
    nodes {
      cta {
        titlecta
        descriptioncta
        link
        btnText
      }
      start_riding {
        titlestartriding
        descriptionstartriding
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