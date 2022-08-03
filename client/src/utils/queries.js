// This will hold the query GET_ME, which will execute the me query set up using Apollo Server.
// in other words, User and Book type
import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;