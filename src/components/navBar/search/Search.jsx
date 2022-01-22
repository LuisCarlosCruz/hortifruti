import React from 'react';
import InputFamily from '../inputs/InputFamily';
import InputName from '../inputs/InputName';
import InputGenus from '../inputs/InputGenus';
import InputOrder from '../inputs/InputOrder';
import InputNutrition from '../inputs/InputNutrition';
import InputValueNutri from '../inputs/InputValueNutri';
import Style from './Search.module.css';
Style;

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
      <InputValueNutri typeInput="number" />
      <br />
      <InputNutrition />
      <br />
    </div>
  );
};

export default Search;
