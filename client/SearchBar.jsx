/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

const SearchBar = ({ search, onSubmit, onChange }) => (
  <div className="search__bar">
    <div className="title">
      Dictionary
    </div>
    <form data-testid="form" onSubmit={(e) => onSubmit(e)}>
      <label>
        <input data-testid="input" type="text" value={search} onChange={(e) => onChange(e)} />
      </label>
    </form>
  </div>
);

export default SearchBar;
