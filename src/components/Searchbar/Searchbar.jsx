import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles.css';
import { MdImageSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSerch = event => {
    event.preventDefault();

    if (query.trim() !== '') {
      onSubmit(query.trim());
      setQuery('');
    } else {
      toast.error('Поле пошуку порожнє, введіть значення пошуку! ');
    }
  };

  return (
    <header className="Searchbar">
      <ToastContainer />
      <form className="SearchForm" onSubmit={handleSerch}>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
        <button className="SearchForm-button" type="submit">
          <span className="SearchForm-button-label">Search</span>
          <MdImageSearch size={30} color="blue" />
        </button>
      </form>
    </header>
  );
};

Searchbar.propTyped = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
