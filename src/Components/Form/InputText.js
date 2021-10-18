import React from 'react';

const Input = ({ id, label, value, setValue }) => {
  const [error, setError] = React.useState('');
  return (
    <div className="inputContainer">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder="Digite o seu nome"
      />
    </div>
  );
};

export default Input;
