import React from 'react';
import { API_URL } from '../../api';

const DeleteBurger = ({ id, getBurgers, setMsg }) => {
  async function deleteBurger() {
    const req = await fetch(`${API_URL}/burgers/${id}`, {
      method: 'DELETE',
    });

    if (req.ok === true) {
      setMsg({
        text: `Pedido n°${id} cancelado com sucesso`,
        className: 'blue',
      });
    } else {
      setMsg({ text: 'Ops, algo deu errado :( ', className: 'red' });
    }

    getBurgers();

    // clear messsage
    setTimeout(() => setMsg(null), 3000);
  }
  return (
    <button className="deleteBtn" onClick={deleteBurger}>
      Cancelar
    </button>
  );
};

export default DeleteBurger;
