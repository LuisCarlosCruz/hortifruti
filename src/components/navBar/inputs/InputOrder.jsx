import React, { useContext } from 'react';
import listOrder from '../../../environments/listOrder';
import Context from '../../../store/Context';
import searchFruitSelect from '../../../utils/searchFruitSelect';

const InputOrder = () => {
  const { setAllFruits } = useContext(Context);

  const handleOnChange = async ({ value }) => {
    const fruit = await searchFruitSelect('order', value);
    setAllFruits(fruit);
  };

  return (
    <div>
      <select
        className="form-select "
        aria-label=".form-select-sm example"
        defaultValue={'DEFAULT'}
        onChange={(e) => handleOnChange(e.target)}>
        <option value="DEFAULT" disabled>
          Name of order
        </option>
        {listOrder.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputOrder;
