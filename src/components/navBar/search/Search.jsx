import React from 'react';
import InputFamily from '../inputs/InputFamily';
import InputName from '../inputs/InputName';
import InputGenus from '../inputs/InputGenus';

const Search = () => {
  return (
    <div>
      <InputName typeInput="text" />
      <br />
      <InputFamily />
      <br />
      <InputGenus />
      <br />
    </div>
  );
};

export default Search;
