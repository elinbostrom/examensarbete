import { gql } from "@apollo/client";

export const RIDING_SCHEMAS = gql`
  query NewQuery {
    heroes(where: { title: "Lektioner och Kurser" }, first: 1) {
      nodes {
        heroInfo {
          title
          slogan
        }
      }
    }
    ridscheman {
      nodes {
        id
        ridescheme {
          day
          instructorName
          level
          name
          rideAgainAllowed
          time
          type
        }
      }
    }
  }
`;
