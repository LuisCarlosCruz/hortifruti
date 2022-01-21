import React, { useContext } from 'react';
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
        <option value="Caricacea">Caricacea</option>
        <option value="Cucurbitaceae">Cucurbitaceae</option>
        <option value="Cucurbitales">Cucurbitales</option>
        <option value="Ericales">Ericales</option>
        <option value="Malpighiales">Malpighiales</option>
        <option value="Malvales">Malvales</option>
        <option value="Myrtales">Myrtales</option>
        <option value="None">None</option>
        <option value="Poales">Poales</option>
        <option value="Rosales">Rosales</option>
        <option value="Sapindales">Sapindales</option>
        <option value="Saxifragales">Saxifragales</option>
        <option value="Solanales">Solanales</option>
        <option value="Solanales">Solanales</option>
        <option value="Vitales">Vitales</option>
        <option value="Zingiberales">Zingiberales</option>
      </select>
    </div>
  );
};

export default InputOrder;
