import React from 'react';
import InputFamily from '../inputs/InputFamily';
import InputName from '../inputs/InputName';
import InputGenus from '../inputs/InputGenus';
import InputOrder from '../inputs/InputOrder';
import Style from './Search.module.css';
import InputValueNutri from '../inputs/inputNutrition/InputValueNutri';
import InputNutrition from '../inputs/inputNutrition/InputNutrition';

const Search = () => {
  return (
    <div className={Style.divSearch}>
      <div className={Style.divInputFilter}>
        <InputName typeInput="text" />
        <InputFamily />
      </div>

      <div className={Style.divInputFilter}>
        <InputGenus />
        <InputOrder />
      </div>

      <div className={Style.divInputFilter}>
        <InputValueNutri typeInput="number" />
        <InputNutrition />
      </div>
    </div>
  );
};

export default Search;
