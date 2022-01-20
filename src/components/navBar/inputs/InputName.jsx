import React, { useContext } from 'react';
import Context from '../../../store/Context';
import PropTypes from 'prop-types';
import searchFruitName from '../../../utils/searchFruitName';

const InputName = ({ label, typeInput }) => {
  const { nameFruit, setNameFruit, setAllFruits } = useContext(Context);

  const handleOnChange = async ({ value }) => {
    setNameFruit(value);
  };

  const handleOnClick = async () => {
    const fruit = await searchFruitName(nameFruit);
    const arrayFruit = Array(fruit);
    console.log(arrayFruit);
    setAllFruits(arrayFruit);
  };

  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input type={typeInput} id="input" name="input" onChange={(e) => handleOnChange(e.target)} />
      <button onClick={() => handleOnClick()}>PESQUISAR</button>
    </div>
  );
};

InputName.propTypes = {
  label: PropTypes.string,
  typeInput: PropTypes.string,
};

export default InputName;
