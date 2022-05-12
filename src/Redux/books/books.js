const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const initalState = [];
const booksReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return {
        ...state,
        books: [...state, action.payload],
      };
    case REMOVEBOOK:
      return state.filter((book) => book.id === action.id);
      
    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADDBOOK,
  payload
});
export const removeBook = (bookId) => ({
  type: REMOVEBOOK,
  id:bookId
});
export default booksReducer;
