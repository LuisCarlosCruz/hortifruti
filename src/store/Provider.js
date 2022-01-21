import Context from './Context';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [nomeUser, setNomeUser] = useState('');
  const [password, setPassword] = useState(null);
  const [allFruits, setAllFruits] = useState([]);
  const [nameFruit, setNameFruit] = useState('');
  const [selectNutrition, setselectNutrition] = useState('');
  const [nutriMin, setnutriMin] = useState(0);
  const [nutriMax, setNutriMax] = useState(6);

  const contextValue = {
    nomeUser,
    setNomeUser,
    password,
    setPassword,
    allFruits,
    setAllFruits,
    nameFruit,
    setNameFruit,
    selectNutrition,
    setselectNutrition,
    nutriMin,
    setnutriMin,
    nutriMax,
    setNutriMax,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
};

export default Provider;
