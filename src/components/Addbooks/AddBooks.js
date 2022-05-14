import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../Redux/books/books';

const AddBooks = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const bookStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    e.target.children[1].children[0].value = null;
    e.target.children[1].children[1].value = null;
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <>
      <hr className="hline" />
      <div className="form-wrap">
        <h3>Add A New Book</h3>
        <form className="add-book-form" onSubmit={formSubmitHandler}>
          <input
            name={title}
            placeholder="Title"
            value={title}
            required
            onChange={(e) => titleChangeHandler(e)}
            className="title"
          />
          <input
            type="text"
            name={author}
            placeholder="Book Author"
            value={author}
            required
            onChange={(e) => authorChangeHandler(e)}
            className="Author"
          />
          <input
            name={category}
            value={category}
            required
            onChange={(e) => categoryChangeHandler(e)}
            className="Author"
          />

          <button
            className="Addbook-btn"
            disabled={!title && !author && !category}
            type="submit"
            onClick={bookStore}
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};
export default AddBooks;
