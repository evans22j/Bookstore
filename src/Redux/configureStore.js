import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const reducer = combineReducers({
  categoriesReducer,
  booksReducer,
});

const store = createStore(reducer, compose(applyMiddleware(logger)));

export default store;