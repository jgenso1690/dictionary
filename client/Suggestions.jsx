/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';

const Suggestions = ({
  definition, firstLetter, words, search, onClick,
}) => (

  <div>
    {!definition
        && firstLetter
        && (
        <div>
          <div data-testid="suggestions" className="suggestions">
            {words.filter((word) => word.toUpperCase().includes(search.toUpperCase())).map(
              (fileteredWord) => (
                <li key={fileteredWord} onClick={(e) => onClick(e)}>
                  {fileteredWord}
                </li>
              ),
            )}
          </div>
        </div>
        )}
  </div>
);

export default Suggestions;
