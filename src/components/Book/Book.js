import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './src/Redux/books/books.js';
import Books from './Books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      {books.map((book) => <Books key={book.item_id} book={book} />)}
    </div>
  );
};

export default Book;
