import React, { useContext } from 'react';
import Context from '../../../store/Context';
import PropTypes from 'prop-types';
import searchFruitName from '../../../utils/searchFruitName';

const InputName = ({ typeInput }) => {
  const { nameFruit, setNameFruit, setAllFruits } = useContext(Context);

  const handleOnChange = async ({ value }) => {
    setNameFruit(value);
  };

  const handleOnClick = async () => {
    const fruit = await searchFruitName(nameFruit);
    const arrayFruit = Array(fruit);
    // console.log(arrayFruit);
    setAllFruits(arrayFruit);
  };

  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type={typeInput}
          placeholder="Name Fruit"
          aria-label="Search"
          onChange={(e) => handleOnChange(e.target)}
        />
        <button className="btn btn-outline-success" type="button" onClick={() => handleOnClick()}>
          Search
        </button>
      </form>
    </div>
  );
};

InputName.propTypes = {
  label: PropTypes.string,
  typeInput: PropTypes.string,
};

export default InputName;
