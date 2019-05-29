import React, { Component } from 'react';

import BookList from './BookList/BookList';
import Loader from './Loader/Loader';
import ErrorNotofication from './ErrorNotofication';
import * as bookApi from './servises/book-api';
import SearchForm from './SearchForm/SearchForm';
import genres from './genres.json';

const mapper = books => {
  return books.map(book => {
    const { id } = book;
    const { title } = book.volumeInfo;
    const { authors } = book.volumeInfo;
    const { publisher } = book.volumeInfo;
    const { publishedDate } = book.volumeInfo;
    const { pageCount } = book.volumeInfo;
    const { rating } = book.volumeInfo;
    const url = book.volumeInfo.imageLinks.smallThumbnail;
    return {
      id,
      title,
      authors,
      publisher,
      publishedDate,
      pageCount,
      rating,
      url,
    };
  });
};

export default class App extends Component {
  state = {
    books: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchBook({ query: 'react', genre: 'computers' });
  }

  fetchBook = ({ query, genre }) => {
    this.setState({ isLoading: true });

    bookApi
      .fetchBooks(query, genre)
      .then(({ data }) => {
        this.setState({ books: mapper(data.items) });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { books, isLoading, error } = this.state;

    return (
      <div className="App">
        <h1>If you do not like React, make your choice!</h1>
        <SearchForm genres={genres} onSubmit={this.fetchBook} />
        {error && <ErrorNotofication text={error.message} />}
        {isLoading && <Loader />}
        {books.length > 0 && <BookList items={books} />}
      </div>
    );
  }
}
