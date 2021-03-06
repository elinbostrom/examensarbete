import { gql } from '@apollo/client'

export const GALLERY = gql`
query GALLERY {
  heroes(where: {title: "Om oss"}) {
    nodes {
      heroInfo {
        slogan
        title
      }
    }
  }
  gallerys {
    nodes {
      id
      galleryInfo {
        title
        description
        link
        gallery {
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
          picture6 {
            altText
            sourceUrl
          }
          picture7 {
            altText
            sourceUrl
          }
          picture8 {
            altText
            sourceUrl
          }
          picture9 {
            altText
            sourceUrl
          }
          picture10 {
            altText
            sourceUrl
          }
          picture11 {
            altText
            sourceUrl
          }
          picture12 {
            altText
            sourceUrl
          }
          picture13 {
            sourceUrl
          }
          picture14 {
            altText
            sourceUrl
          }
          picture15 {
            altText
            sourceUrl
          }
          picture16 {
            altText
            sourceUrl
          }
          picture17 {
            altText
            sourceUrl
          }
          picture18 {
            altText
            sourceUrl
          }
          picture19 {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}
`;