import React from "react";
import { useQuery } from "@apollo/client";
import { fetchBookDetailsQuery } from "../queries/queries";

export default function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(fetchBookDetailsQuery, {
    variables: { id: bookId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <table>
      <thead>
        <th>Title</th>
        <th>Genre</th>
        <th>Author (age)</th>
        <th>Number of books</th>
      </thead>
      <tbody>
        <tr>
          <td>{data.book.name}</td>
          <td>{data.book.genre}</td>
          <td>
            {data.book.author.name} ({data.book.author.age})
          </td>
          <td>{data.book.author.books.length}</td>
        </tr>
      </tbody>
    </table>
  );
}
