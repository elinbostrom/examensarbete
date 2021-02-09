import { gql } from "@apollo/client";

export const STALLNYTT = gql`
query STALLNYTT {
  heroes(where: {title: "Stallnytt"}) {
    nodes {
      heroInfo {
        title
        slogan
      }
    }
  }
  stablenews {
    nodes {
      posts {
        title
        information
        link
        pictures {
          picture1 {
            altText
            sourceUrl
          }
          picture2 {
            altText
            sourceUrl
          }
          picture3 {
            altText
            sourceUrl
          }
          picture4 {
            altText
            sourceUrl
          }
          picture5 {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}
`