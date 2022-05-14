import * as api from '../../api/api';

const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const GETBOOKS = 'bookstore/books/GETBOOKS';

const initalState = [];

const booksReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case GETBOOKS:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id === action.id);

    default:
      return state;
  }
};

const handleData = (data) => {
  console.log(data);
  const books = [];
  // const keys = Object.keys(data);

  // keys.forEach((key, index) => {
  //   const book = data[keys[index]];state
  //   book[0].item_id = key;

  //   books.push(book[0]);
  // });
  return books;
};

// ACTION CREATORS
export const fetchData = () => async (dispatch) => api
  .fetchBooks()
  .then((data) => dispatch({ type: GETBOOKS, payload: handleData(data) }));
export const addBook = (book) => async (dispatch) => {
  try {
    await api.postBook(book);

    dispatch({ type: ADDBOOK, payload: book });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getBooks = (payload) => ({ type: GETBOOKS, payload });

export const removeBook = (bookId) => async (dispatch) => {
  try {
    await api.deleteBook(bookId);

    dispatch({ type: REMOVEBOOK, payload: bookId });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleBook = (payload) => ({ type: REMOVEBOOK, payload });

export default booksReducer;
