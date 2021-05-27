import { gql } from '@apollo/client'

export const HORSES = gql`
query HORSES {
  heroes(where: {title: "Om oss"}) {
    nodes {
      heroInfo {
        slogan
        title
      }
    }
  }
  horses(where: {orderby: {field: TITLE, order: ASC}}, first: 40) {
    nodes {
      id
      horseInfo {
        name
        category
        birthyear
        breed
        description
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