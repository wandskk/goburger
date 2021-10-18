import React from 'react';

const Select = ({ label, name, id, text, options, value, setValue }) => {
  return (
    <div className="inputContainer">
      <label htmlFor={id}>{label}</label>
      <select
        value={value !== '' ? value : ''}
        onChange={({ target }) => setValue(target.value)}
        name={name}
        id={id}
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
    </div>
  );
};

export default Select;
