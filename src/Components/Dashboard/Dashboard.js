import React from 'react';
import styles from './Dashboard.module.css';
import { API_URL } from '../../api';
import Message from '../Message/Message';
import Title from '../../Components/Title/Title';
import Table from './Table';

const Dashboard = () => {
  const [data, setData] = React.useState(null);
  const [msg, setMsg] = React.useState(null);

  async function getBurgers() {
    const res = await fetch(API_URL + '/burgers');
    const json = await res.json();

    if (json.length > 0) {
      setData(json);
    } else {
      setData([]);
    }
  }

  React.useEffect(() => {
    getBurgers();
  }, []);

  return (
    <div className="container content">
      <div className="row">
        {msg !== null && (
          <div className="col-10 offset-md-1">
            <Message msg={msg} setMsg={setMsg} className={msg.className} />
          </div>
        )}
        <div className={`col-10 offset-md-1 ${styles.burgerTable}`}>
          {data && data.length !== 0 && (
            <>
              <Title text="Lista de pedidos" />
              <Table
                data={data}
                styles={styles}
                msg={msg}
                setMsg={setMsg}
                getBurgers={getBurgers}
              />
            </>
          )}
          {data && data.length === 0 && <Title text="Não há pedidos ainda." />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
