import React from 'react'
import { useSelector } from 'react-redux';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Book from './Book';
import AddBooks from '../Addbooks/AddBooks';
import './Books.css';

const Books = () => {
  const book = useSelector((state) => state.booksReducer);

  return (
    <>
      <main className="main">
        <section className="books-list-section">

          <Book
            key={generate({ charset: alphanumeric, length: 32 })}
            {...book}
          />

          <button type="button" className="remove">Remove</button>
        </section>
        <section className="add-book-section">
          <AddBooks />
        </section>
      </main>
    </>
  );
};
export default Books;
