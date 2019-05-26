import React, { Component } from 'react';

import BookList from './BookList/BookList';
import Loader from './Loader/Loader';
import ErrorNotofication from './ErrorNotofication';
import * as bookApi from './servises/book-api';
import SearchForm from './SearchForm/SearchForm';
import genres from './genres.json';

function mapper(books) {
  const arr1 = books.map(({ volumeInfo: book, id }) => ({
    ...book,
    id,
  }));
  const arr2 = arr1.map(
    ({
      imageLinks: image,
      title,
      authors: autor,
      id,
      publisher,
      publishedDate,
      pageCount,
      ratingsCount: rating,
    }) => ({
      ...image,
      title,
      autor,
      id,
      publisher,
      publishedDate,
      pageCount,
      rating,
    }),
  );
  const arr3 = arr2.map(
    ({
      smallThumbnail: url,
      title,
      autor,
      id,
      publisher,
      publishedDate,
      pageCount,
      rating,
    }) => ({
      url,
      title,
      autor,
      id,
      publisher,
      publishedDate,
      pageCount,
      rating,
    }),
  );
  return arr3;
}

export default class App extends Component {
  state = {
    books: [],
    isLoading: false,
    error: null,
    query: 'react',
    genre: 'computers',
  };

  componentDidMount() {
    this.fetchBook();
  }

  fetchBook = () => {
    this.setState({ isLoading: true });
    bookApi
      .fetchBooks(this.state.query, this.state.genre)
      .then(({ data }) => {
        this.setState({ books: mapper(data.items) });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false, query: '' });
      });
  };

  handleQueryChange = e => {
    this.setState({ query: e.target.value });
  };

  handleQuerySelect = e => {
    this.setState({ genre: e.target.value });
  };

  render() {
    const { books, isLoading, error, query } = this.state;

    return (
      <div className="App">
        <SearchForm
          genres={genres}
          value={query}
          onChangeInput={this.handleQueryChange}
          onChangeSelect={this.handleQuerySelect}
          onSubmit={this.fetchBook}
        />
        {error && <ErrorNotofication text={error.message} />}
        {isLoading && <Loader />}
        {books.length > 0 && <BookList items={books} />}
      </div>
    );
  }
}
