import React, { useContext } from 'react';
import Context from '../../../store/Context';
import searchFruitSelect from '../../../utils/searchFruitSelect';

const InputFamily = () => {
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
        <option value="Ananas">Ananas</option>
        <option value="Apteryx">Apteryx</option>
        <option value="Carica">Carica</option>
        <option value="Citrullus">Citrullus</option>
        <option value="Citrus">Citrus</option>
        <option value="Cucumis">Cucumis</option>
        <option value="Diospyros">Diospyros</option>
        <option value="Durio">Durio</option>
        <option value="Ficus">Ficus</option>
        <option value="Fragaria">Fragaria</option>
        <option value="Litchi">Litchi</option>
        <option value="Malus">Malus</option>
        <option value="Mangifera">Mangifera</option>
        <option value="Musa">Musa</option>
        <option value="Passiflora">Passiflora</option>
        <option value="Prunus">Prunus</option>
        <option value="Psidium">Psidium</option>
        <option value="Pyrus">Pyrus</option>
        <option value="Ribes">Ribes</option>
        <option value="Rubus">Rubus</option>
        <option value="Solanum">Solanum</option>
        <option value="Vaccinium">Vaccinium</option>
        <option value="Vitis">Vitis</option>
      </select>
    </div>
  );
};

export default InputFamily;
