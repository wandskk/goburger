import React from 'react';
import { API_URL } from '../../api';

const UpdateStatusBurger = ({ burgerStatus, burgerId, msg, setMsg }) => {
  const [status, setStatus] = React.useState(null);
  const [select, setSelect] = React.useState(null);

  async function getStatus() {
    const response = await fetch(API_URL + '/status');
    const json = await response.json();
    setStatus(json);
  }

  async function handleChange({ target }) {
    setMsg(null);
    const option = target.value;

    const dataJson = JSON.stringify({ status: option });

    const response = await fetch(`http://localhost:4000/burgers/${burgerId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: dataJson,
    });
    const json = await response.json();

    // Response verification

    if (response.ok === true) {
      setSelect(json.status);
      setMsg({
        text: `Pedido n°${burgerId} atualizado com sucesso`,
        className: 'updated',
      });
    } else {
      setMsg({ text: 'Ops, algo deu errado :( ', className: 'red' });
    }
  }

  React.useEffect(() => {
    getStatus();
    setSelect(burgerStatus);
  }, []);

  return (
    <>
      {select && (
        <select value={select} name="status" onChange={handleChange}>
          {status !== null &&
            status.map((s, index) => (
              <option key={index} value={s.tipo}>
                {s.tipo}
              </option>
            ))}
        </select>
      )}
    </>
  );
};

export default UpdateStatusBurger;
