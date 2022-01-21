import React, { useContext } from 'react';
import listGenus from '../../../environments/listGenus';
import Context from '../../../store/Context';
import searchFruitSelect from '../../../utils/searchFruitSelect';

const InputGenus = () => {
  const { setAllFruits } = useContext(Context);

  const handleOnChange = async ({ value }) => {
    const fruit = await searchFruitSelect('genus', value);
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
          Name of genus
        </option>
        {listGenus.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputGenus;
