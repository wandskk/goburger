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
        className: 'error',
      });
    } else {
      setMsg({ text: 'Ops, algo deu errado :( ', className: 'error' });
    }

    getBurgers();
  }
  return (
    <button className="deleteBtn" onClick={deleteBurger}>
      Cancelar
    </button>
  );
};

export default DeleteBurger;
