import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ label, typeInput }) => {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input type={typeInput} id="input" name="input" />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  typeInput: PropTypes.string,
};

export default Input;
