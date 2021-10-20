import React from 'react';

const Select = ({ id, options, text, onChange, value, onBlur, error }) => {
  function handleClick() {
    let input = document.getElementById(id);
    input.classList.remove('inputError');
  }
  return (
    <div className="inputContainer">
      <label htmlFor={id}>{text}</label>
      <select
        value={value !== '' ? value : ''}
        onChange={onChange}
        onBlur={onBlur}
        name={value}
        onClick={handleClick}
        id={id}
        className={error ? 'inputError' : ''}
      >
        <option disabled value="">
          {text}
        </option>
        {options.map(({ id, tipo }) => (
          <option key={id + tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>
      {error && <p className="formValidate">{error}</p>}
    </div>
  );
};

export default Select;
