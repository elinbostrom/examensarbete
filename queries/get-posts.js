import { gql } from "@apollo/client";

export const GET_POSTS = gql`
query GET_POSTS {
  stablenews {
    nodes {
      date
      slug
      stablenewId
      posts {
        information
        link
        title
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