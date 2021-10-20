import React from 'react';

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className="inputContainer">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        className={error ? 'inputError' : ''}
      />
      {error && <p className="formValidate">{error}</p>}
    </div>
  );
};

export default Input;
