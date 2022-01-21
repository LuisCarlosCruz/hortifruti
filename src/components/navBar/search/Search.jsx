import React from 'react';
import InputFamily from '../inputs/InputFamily';
import InputName from '../inputs/InputName';
import InputGenus from '../inputs/InputGenus';
import InputOrder from '../inputs/INATIVO-InputOrder';
import InputNutrition from '../inputs/InputNutrition';

const Search = () => {
  return (
    <div>
      <InputName typeInput="text" />
      <br />
      <InputFamily />
      <br />
      <InputGenus />
      <br />
      <InputOrder />
      <br />
      <InputNutrition />
      <br />
    </div>
  );
};

export default Search;
