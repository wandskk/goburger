import React from 'react';
// import Select from './UpdateBurger';
import styles from './Dashboard.module.css';
import DeleteBurger from './DeleteBurger';

const Dashboard = () => {
  const [data, setData] = React.useState('');
  const [status, setStatus] = React.useState(null);

  async function getBurgers() {
    const response = await fetch('http://localhost:4000/burgers');
    const json = await response.json();
    setData(json);
    console.log(json);
  }

  async function getStatus() {
    const response = await fetch('http://localhost:4000/status');
    const json = await response.json();
    // setStatus(json);
  }

  React.useEffect(() => {
    getBurgers();
    getStatus();
  }, []);

  return (
    <div className="container">
      {data.length === 0 && (
        <div>
          <h2>Não há pedidos no momento!</h2>
        </div>
      )}
      {data.length !== 0 && (
        <div id={styles.burgerTable}>
          <div>
            <div id={styles.burgerTableHeading}>
              <div className={styles.orderId}>#:</div>
              <div>Cliente:</div>
              <div>Pão:</div>
              <div>Carne:</div>
              <div>Opcionais:</div>
              <div>Ações:</div>
            </div>
          </div>
          <div id={styles.burgerTableRows}>
            {data.map((burger) => (
              <div className={styles.burgerTableRow} key={burger.id}>
                <div className={styles.orderNumber}>{burger.id}</div>
                <div>{burger.nome}</div>
                <div>{burger.pao}</div>
                <div>{burger.carne}</div>
                <div>
                  <ul>
                    {burger.opcionais.map((opcional) => (
                      <li key={opcional}>{opcional}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  {/* {status && (
                    <Select status={status} burger={burger} styles={styles} />
                  )} */}
                </div>
                <DeleteBurger id={burger.id} getBurgers={getBurgers} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
