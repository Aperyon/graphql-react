import { gql } from "@apollo/client";

export const fetchAuthorsQuery = gql`
  {
    authors {
      id
      name
      age
    }
  }
`;

export const fetchBooksQuery = gql`
  {
    books {
      id
      name
      genre
      author {
        name
        age
      }
    }
  }
`;

export const fetchBookDetailsQuery = gql`
  query($id: ID) {
    book(id: $id) {
      name
      genre
      author {
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
      author {
        name
        id
      }
    }
  }
`;
