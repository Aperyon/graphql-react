import React from "react";
import { useQuery } from "@apollo/client";

import { fetchBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(fetchBooksQuery);
  const [bookId, setBookId] = React.useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  function onBookClick(bookId) {
    setBookId(bookId);
  }

  console.log(data.books.map((book) => book.id));
  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <li key={book.id} onClick={() => onBookClick(book.id)}>
            {book.name} [by {book.author.name} (@{book.author.age})]
          </li>
        ))}
        {bookId && <BookDetails bookId={bookId} />}
      </ul>
    </div>
  );
}

export default BookList;
