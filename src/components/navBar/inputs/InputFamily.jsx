import React, { useContext } from 'react';
import Context from '../../../store/Context';
import searchFruitSelect from '../../../utils/searchFruitSelect';

const InputFamily = () => {
  const { setAllFruits } = useContext(Context);

  const handleOnChange = async ({ value }) => {
    const fruit = await searchFruitSelect('family', value);
    console.log(fruit);
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
        <option value="Actinidiaceae">Actinidiaceae</option>
        <option value="Anacardiaceae">Anacardiaceae</option>
        <option value="Bromeliaceae">Bromeliaceae</option>
        <option value="Caricaceae">Caricaceae</option>
        <option value="Cucurbitaceae">Cucurbitaceae</option>
        <option value="Ebenaceae">Ebenaceae</option>
        <option value="Ericaceae">Ericaceae</option>
        <option value="Grossulariaceae">Grossulariaceae</option>
        <option value="Malvaceae">Malvaceae</option>
        <option value="Moraceae">Moraceae</option>
        <option value="Musaceae">Musaceae</option>
        <option value="Myrtaceae">Myrtaceae</option>
        <option value="Passifloraceae">Passifloraceae</option>
        <option value="Rosaceae">Rosaceae</option>
        <option value="Rutaceae">Rutaceae</option>
        <option value="Sapindaceae">Sapindaceae</option>
        <option value="Solanaceae">Solanaceae</option>
        <option value="Vitaceae">Vitaceae</option>
      </select>
    </div>
  );
};

export default InputFamily;
