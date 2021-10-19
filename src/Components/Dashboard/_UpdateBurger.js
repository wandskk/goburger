import React from 'react';

const Select = ({ status, burger }) => {
  const [select, setSelect] = React.useState('');

  async function handleChange({ target }) {
    const option = target.value;

    const dataJson = JSON.stringify({ status: option });

    const response = await fetch(`http://localhost:4000/burgers/${burger.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: dataJson,
    });
    const json = await response.json();
    setSelect(json.status);
    console.log(json);
  }

  React.useEffect(() => {
    setSelect(status);
    console.log(status);
  }, []);

  return (
    <form>
      <select name="status" onChange={handleChange} value={burger.status}>
        {status &&
          status.map((s) => (
            <option
              key={s.id}
              value={s.tipo}
              selected={burger.status === s.tipo}
            >
              {s.tipo}
            </option>
          ))}
      </select>
    </form>
  );
};

export default Select;
