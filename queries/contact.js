import { gql } from '@apollo/client'

export const CONTACT = gql`
query CONTACT {
  heroes(where: {title: "Kontakt"}) {
    nodes {
      heroInfo {
        title
        slogan
      }
    }
  }
  newPages(first: 1, where: {title: "Kontakt & Öppettider"}) {
    nodes {
      id
      information {
        contact {
          email
          city
          address
          phone
          postalcode
        }
        stableClosed {
          closed1 {
            date
            description
          }
          closed2 {
            date
            description
          }
          closed3 {
            date
            description
          }
          closed4 {
            date
            description
          }
          closed5 {
            date
            description
          }
          closed6 {
            date
            description
          }
          closed7 {
            date
            description
          }
          closed8 {
            date
            description
          }
        }
        startFinish {
          firstDayHt
          firstDayVt
          lastDayHt
          lastDayVt
        }
        openinghours {
          closedforlunch
          friday
          montors
          weekends
        }
      }
    }
  }
}
`;