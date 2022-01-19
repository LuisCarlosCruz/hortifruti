import Context from './Context';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [nomeUser, setNomeUser] = useState('');
  const [password, setPassword] = useState(null);

  const contextValue = {
    nomeUser,
    setNomeUser,
    password,
    setPassword,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
};

export default Provider;
