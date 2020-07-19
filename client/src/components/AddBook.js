import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

import {
  fetchAuthorsQuery,
  addBookMutation,
  fetchBooksQuery,
} from "../queries/queries";

export default function AddBook() {
  const { loading, error, data } = useQuery(fetchAuthorsQuery);
  const [addBook, { addBookData }] = useMutation(addBookMutation);
  const { register, handleSubmit } = useForm();

  function onAddBook(values) {
    console.log(values);
    addBook({
      variables: values,
      refetchQueries: [{ query: fetchBooksQuery }],
    });
  }

  return (
    <form onSubmit={handleSubmit(onAddBook)}>
      <div className="field">
        <label>Name</label>
        <input type="text" name="name" ref={register} />
      </div>
      <div className="field">
        <label>Genre</label>
        <input type="text" name="genre" ref={register} />
      </div>
      <div className="field">
        <label>Author</label>
        <select name="authorId" ref={register}>
          {data?.authors &&
            data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name} ({author.age})
              </option>
            ))}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}
