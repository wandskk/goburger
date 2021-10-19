import React from 'react';
import styles from './Dashboard.module.css';
import DeleteBurger from './DeleteBurger';
import UpdateStatusBurger from './UpdateStatusBurger';
import { API_URL } from '../../api';
import Message from '../Message/Message';

const Dashboard = () => {
  const [data, setData] = React.useState(null);
  const [msg, setMsg] = React.useState(null);

  async function getBurgers() {
    const res = await fetch(API_URL + '/burgers');
    const json = await res.json();
    setData(json);
  }

  React.useEffect(() => {
    getBurgers();
  }, []);

  return (
    <div className="container content">
      <div className="row">
        {msg !== null && (
          <div className="col-10 offset-md-1">
            <Message text={msg.text} className={msg.className} />
          </div>
        )}
        <div className={`col-10 offset-md-1 ${styles.burgerTable}`}>
          {data !== null && (
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
                    <td>
                      <UpdateStatusBurger
                        burgerStatus={status}
                        burgerId={id}
                        setMsg={setMsg}
                      />
                      <br />
                      <DeleteBurger
                        id={id}
                        getBurgers={getBurgers}
                        setMsg={setMsg}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
