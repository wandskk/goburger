import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((checkbox) => checkbox !== target.value));
    }
  }
  return (
    <div id="opcionaisContainer" className="inputContainer">
      <label id="opcionaisTitle" htmlFor="opcionais">
        Selecione os opcionais:
      </label>
      {options.map(({ id, tipo }) => (
        <div key={id + tipo} className="checkboxContainer">
          <input
            type="checkbox"
            name="opcionais"
            value={tipo}
            id={tipo}
            onChange={handleChange}
          />
          <span>{tipo}</span>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
