import React, { useState } from 'react';
import './AddBooks.css';
import postData from '../../api/api';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../Redux/books/books';

const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QxnV6deSqC4eCjJWKBT/books`
const AddBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // const newBook = {
    //   title,
    //   author,
    //   id: uuidv4(),
    // };
    const newBook = {
      item_id: uuidv4(),
      title:title,
      category: author,
      author:author,
  }
    postData(url,newBook)
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <>
      <hr className="hline" />
      <div className="form-wrap">
        <h3>Add A New Book</h3>
        <form className="add-book-form" onSubmit={handleSubmit}>
          <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Title" className="title" />
          <input onChange={(e) => setAuthor(e.target.value)} value={author} type="text" placeholder="author" className="Author" />
          <input onChange={(e) => setCategory(e.target.value)} value={category} type="text" placeholder="author" className="Author" />

          <button className="Addbook-btn" type="button" onClick={(e) => handleSubmit(e)}>Add Book</button>
        </form>
      </div>
    </>
  );
};
export default AddBooks;
