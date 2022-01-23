import React, { useContext } from 'react';
import Context from '../../../../store/Context';

import Style from './InputValueNutri.module.css';
Style;

const InputValueNutri = ({ typeInput }) => {
  const { setNutriMin, setNutriMax } = useContext(Context);

  const handleOnChange = (e, type) => {
    type === 'min' ? setNutriMin(+e.value + 0.1) : setNutriMax(+e.value + 0.1);
  };

  return (
    <div className={Style.divInputValueNutri}>
      <input
        className="form-control me-2"
        type={typeInput}
        aria-label="Search"
        placeholder="min"
        min="0"
        onChange={(e) => handleOnChange(e.target, 'min')}
      />
      <input
        className="form-control me-2"
        type={typeInput}
        aria-label="Search"
        placeholder="max"
        min="0"
        max="1000"
        onChange={(e) => handleOnChange(e.target, 'max')}
      />
    </div>
  );
};

export default InputValueNutri;
