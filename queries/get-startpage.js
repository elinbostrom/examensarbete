import { gql } from "@apollo/client";

export const GET_STARTPAGE = gql`
query GET_STARTPAGE {
  startpageitems(first: 1) {
    nodes {
      welcome {
        title
        slogan
      }
      cta {
        titlecta
        descriptioncta
        btnText
        link
      }
      start_riding {
        titlestartriding
        descriptionstartriding
      }
    }
  }
}
`