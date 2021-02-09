import { gql } from "@apollo/client";

export const GET_STARTPAGE = gql`
query GET_STARTPAGE {
  startpageitems {
    nodes {
      welcome {
        slogan
        titel
      }
      cta {
        titel
        link
        information
        btnText
      }
      start_riding {
        titel
        information
      }
    }
  }
}
`