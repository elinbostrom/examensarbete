import { gql } from '@apollo/client';

export const POST = (slug) => (
  gql`
    query POST {
    post(id: "${slug}", idType: SLUG) {
    id
    slug
    title
    date
    content
  }
  stablenew(id: "${slug}", idType: SLUG) {
    id
    date
    posts {
      title
      link
      information
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
  `
);