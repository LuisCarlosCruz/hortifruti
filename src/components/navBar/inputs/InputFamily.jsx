import React, { useContext } from 'react';
import listFamily from '../../../environments/listFamily';
import Context from '../../../store/Context';
import searchFruitSelect from '../../../utils/searchFruitSelect';

const InputFamily = () => {
  const { setAllFruits } = useContext(Context);

  const handleOnChange = async ({ value }) => {
    const fruit = await searchFruitSelect('family', value);
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
          Name of family
        </option>
        {listFamily.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputFamily;
