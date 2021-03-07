import { gql } from '@apollo/client'

export const CONTACT = gql`
query CONTACT {
  heroes(where: {title: "Om oss"}) {
    nodes {
      heroInfo {
        slogan
        title
      }
    }
  }
  contacts(first: 1) {
    nodes {
      info {
        companynumber
        email
        phone
        address
        city
        postalcode
      }
      openingHours {
        openinghours {
          montors
          friday
          closedforlunch
          weekends
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
          lastDayHt
          firstDayVt
          lastDayVt
        }
      }
    }
  }
}
`;