import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = { query: '', genre: '' };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSelect = e => {
    this.setState({ genre: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    const { genres } = this.props;
    return (
      <form className={styles.formas}>
        <input value={query} onChange={this.handleChange} />
        <select onBlur={this.handleSelect}>
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <button type="button" onClick={this.handleSubmit}>
          Search
        </button>
      </form>
    );
  }
}
// ({
//   genres,
//   value,
//   onChangeInput,
//   onChangeSelect,
//   onSubmit,
// }) => (
//   <form className={styles.formas}>
//     <input value={value} onChange={onChangeInput} />
//     <select onBlur={onChangeSelect}>
//       {genres.map(genre => (
//         <option key={genre} value={genre}>
//           {genre}
//         </option>
//       ))}
//     </select>
//     <button type="button" onClick={onSubmit}>
//       Search
//     </button>
//   </form>
// );

SearchForm.propTypes = {
  genres: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
// export default SearchForm;
