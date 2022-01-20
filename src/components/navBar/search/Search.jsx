import React from 'react';
import InputFamily from '../inputs/InputFamily';
import InputName from '../inputs/InputName';

const Search = () => {
  return (
    <div>
      <InputName typeInput="text" />
      <br />
      <InputFamily typeInput="text" />
      <br />
    </div>
  );
};

export default Search;
