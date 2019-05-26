import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookListItem.module.css';

const BookListItem = ({
  title,
  autor,
  publisher,
  publishedDate,
  pageCount,
  rating,
  url,
}) => {
  return (
    <div className={styles.card}>
      <img src={url} alt="img" />
      <div>
        <h2>{title}</h2>
        <p>Autor:{autor}</p>
        <p>Publisher:{publisher}</p>
        <p>PublishedDate:{publishedDate}</p>
        <p>PageCount:{pageCount}</p>
        <p>Rating:{rating}</p>
      </div>
    </div>
  );
};
BookListItem.defaultProps = {
  rating: 0,
};
BookListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
  rating: PropTypes.number,
};

export default BookListItem;
