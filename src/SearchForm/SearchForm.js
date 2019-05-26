import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({
  genres,
  value,
  onChangeInput,
  onChangeSelect,
  onSubmit,
}) => (
  <form className={styles.formas}>
    <input value={value} onChange={onChangeInput} />
    <select onBlur={onChangeSelect}>
      {genres.map(genre => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
    <button type="button" onClick={onSubmit}>
      Search
    </button>
  </form>
);

SearchForm.propTypes = {
  genres: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
