// mutations.js: LOGIN_USER will execute the loginUser mutation set up using Apollo Server ...
// ... ADD_USER will execute the addUser mutation, SAVE_BOOK will execute the saveBook mutation ...
// ... REMOVE_BOOK will execute the removeBook mutation.
// see Week 21, lessons 23-24

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          bookId
          image
          link
          title
          description
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $newBook: InputBook!
    ) {
    saveBook(
        newBook: $newBook
        ) {
            _id
            username
            email
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

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $bookId: ID!
    ) {
    removeBook(
        bookId: $bookId
        ) {
            _id
            username
            email
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