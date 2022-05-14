import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';
import AddBooks from '../Addbooks/AddBooks';
import { removeBook } from '../../Redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  console.log(books);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(removeBook(e));
  };

  return (
    <>
      <main className="main">
        <section className="books-list-section">
          <ul>
            {books.map((book) => (
              <li id={book.item_id} key={book.item_id}>
                {book.title}
                by
                {book.author}

                <button type="button" className="remove" onClick={(e) => handleClick(e.target.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </section>
        <section className="add-book-section">
          <AddBooks />
        </section>
      </main>
    </>
  );
};

// Books.propTypes = {
//   book: PropTypes.objectOf(PropTypes.object),
// }

// Books.defaultProps = {
//   book: {},
// };

export default Books;
