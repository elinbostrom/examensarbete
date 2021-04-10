import { gql } from '@apollo/client';

export const START_RIDING = gql`
query START_RIDING {
  heroes(where: { title: "Lektioner och Kurser" }) {
    nodes {
      heroInfo {
        title
        slogan
      }
    }
  }
  newPages(first: 1, where: {title: "Börja rida"}) {
    nodes {
      id
      information {
        welcome {
          title
          description
        }
        information {
          title
          description
          picture {
            altText
            sourceUrl
          }
        }
        minridskola {
          title
          description
          link
          btntext
          picture {
            altText
            sourceUrl
          }
        }
        ridscheman {
          title
          description
          btntextponny
          btntexthorse
          linkhast
          linkponny
          picture {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}
`