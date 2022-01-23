import React, { useContext } from 'react';
import Context from '../../../../store/Context';
import searchNutrition from '../../../../utils/searchNutrition';
import listNutrition from '../../../../environments/listNutrition';

import Style from './InputNutrition.module.css';
Style;

const InputNutrition = () => {
  const { setselectNutrition, nutriMin, nutriMax, setAllFruits } = useContext(Context);

  const handleOnChange = async ({ id: name }) => {
    await setselectNutrition(name);
    if (nutriMin !== null && nutriMax !== null) {
      const listNutri = await searchNutrition(name, nutriMin, nutriMax);
      setAllFruits(listNutri);
    }
  };

  return (
    <div className={Style.divBtnNutri}>
      {listNutrition.map(({ type }) => (
        <div key={type} className={Style.divBtnNutri}>
          <input
            type="radio"
            onChange={(e) => handleOnChange(e.target)}
            className="btn-check"
            name="options"
            id={type}
          />
          <label className="btn btn-outline-success" htmlFor={type}>
            {type}
          </label>
        </div>
      ))}
    </div>
  );
};
export default InputNutrition;
