
import React from 'react';
import PropTypes from 'prop-types';

function Header({ onAddEntryClick }) {
  return (
    <header className="flex-wrap justify-center items-center mb-6">
      <h1 className="text-6xl font-extrabold text-yellow-700">My Diary</h1>
      <br />
      <button
        className="bg-yellow-900 text-yellow-300 px-5 py-2 rounded-lg hover:bg-yellow-200 transition-colors"
        onClick={onAddEntryClick}
      >
        Add Entry
      </button>
    </header>
  );
}

Header.propTypes = {
  onAddEntryClick: PropTypes.func.isRequired,
};

export default Header;
