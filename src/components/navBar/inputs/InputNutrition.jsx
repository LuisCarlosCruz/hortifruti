import React, { useContext } from 'react';
import Context from '../../../store/Context';
import listNutrition from '../../../environments/listNutrition';
import searchNutrition from '../../../utils/searchNutrition';
// import searchFruitAll from '../../../utils/searchFruitAll';

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
    <div>
      {listNutrition.map(({ type }) => (
        <div key={type}>
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

{
  /* <input
  type="radio"
  className="btn-check"
  name="options-outlined"
  id="carbohydrates"
  autoComplete="off"
/>
<label className="btn btn-outline-success" htmlFor="carbohydrates">
  Carbohydrates
</label> */
}
export default InputNutrition;
