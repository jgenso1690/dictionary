/* eslint-disable react/prop-types */

import React from 'react';

const Definition = ({ definition }) => (

  <div>
    {definition
    && (
    <div data-testid="definition" className="definition">
      Definition:
      <span>{definition}</span>
    </div>
    )}
  </div>
);

export default Definition;
