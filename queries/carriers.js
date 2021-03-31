import { gql } from '@apollo/client';

export const CARRIERS = gql`
query CARRIERS {
  carriers {
    nodes {
      id
      info {
        title
        time
        work
        show
        description
      }
    }
  }
}
`;