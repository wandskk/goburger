import React from 'react';
import { Animated } from 'react-animated-css';
import DeleteBurger from './DeleteBurger';
import UpdateStatusBurger from './UpdateStatusBurger';

const Table = ({ data, styles, msg, setMsg, getBurgers }) => {
  return (
    <Animated animationIn="fadeIn" animationOut="slideOutLeft" isVisible={true}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cliente:</th>
            <th scope="col">Pão:</th>
            <th scope="col">Carne:</th>
            <th scope="col">Opcionais:</th>
            <th scope="col">Ações:</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, nome, carne, pao, opcionais, status }) => (
            <tr key={id}>
              <th scope="row">
                <p>{id}</p>
              </th>
              <td>
                <p>{nome}</p>
              </td>
              <td>
                <p>{pao}</p>
              </td>
              <td>
                <p>{carne}</p>
              </td>
              <td>
                <ul>
                  {opcionais.map((opcao) => (
                    <li key={opcao + Math.random()}>{opcao}</li>
                  ))}
                </ul>
              </td>
              <td className={styles.actions}>
                <UpdateStatusBurger
                  burgerStatus={status}
                  burgerId={id}
                  msg={msg}
                  setMsg={setMsg}
                />
                <br />
                <DeleteBurger id={id} getBurgers={getBurgers} setMsg={setMsg} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Animated>
  );
};

export default Table;
