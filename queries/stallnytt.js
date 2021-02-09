import { gql } from "@apollo/client";

export function STALLNYTT(posts) {

  return gql`
  query STALLNYTT {
    heroes(where: {title: "Stallnytt"}) {
      nodes {
        heroInfo {
          title
          slogan
        }
      }
    }
    stablenews(first: ${posts}) {
      nodes {
        id
        date
        posts {
          title
          information
          link
          btntext
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
} 