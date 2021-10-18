import React from 'react';

const Checkbox = ({ data, checkbox, setCheckbox }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setCheckbox([...checkbox, target.value]);
    } else {
      setCheckbox(checkbox.filter((checkbox) => checkbox !== target.value));
    }
  }
  return (
    <div id="opcionaisContainer" className="inputContainer">
      <label id="opcionaisTitle" htmlFor="opcionais">
        Selecione os opcionais:
      </label>
      {data.map(({ id, tipo }) => (
        <div key={id + tipo} className="checkboxContainer">
          <input
            type="checkbox"
            name="opcionais"
            value={tipo}
            onChange={handleChange}
          />
          <span>{tipo}</span>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
