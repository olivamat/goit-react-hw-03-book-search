import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from '../BookListItem/BookListItem';
import styles from './BookList.module.css';

const BookList = ({ items }) => (
  <div>
    <ul className={styles.bloc}>
      {items.map(item => (
        <li key={item.id} className={styles.item}>
          <BookListItem {...item} />
        </li>
      ))}
    </ul>
  </div>
);

BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BookList;
