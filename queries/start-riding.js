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
  lektionerkurseritems(where: {title: "Börja rida"}, first: 1) {
    nodes {
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
          btntext
          link
          picture {
            altText
            sourceUrl
          }
        }
        ridscheman {
          title
          description
          btntexthorse
          linkhast
          btntextponny
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