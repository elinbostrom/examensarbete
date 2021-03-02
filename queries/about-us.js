import { gql } from '@apollo/client'

export const ABOUT_US = gql`
query ABOUT_US {
  heroes(where: {title: "Om oss"}) {
    nodes {
      heroInfo {
        title
        slogan
      }
    }
  }
  aboutusposts(first: 1) {
    nodes {
      description {
        description
      }
      article {
        sectionOne {
          title
          description
          picture {
            altText
            sourceUrl
          }
        }
        sectionTwo {
          title
          description
          picture {
            altText
            sourceUrl
          }
        }
        sectionThree {
          title
          description
          picture {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}
`;