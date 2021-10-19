import React from 'react';
import InputText from './InputText.js';
import './FormBurger.css';
import Select from './Select.js';
import Checkbox from './Checkbox.js';
import Button from './Submit.js';
import Message from '../Message/Message.js';

const Form = () => {
  const [data, setData] = React.useState(null);
  const [msg, setMsg] = React.useState(null);

  const [name, setName] = React.useState('');
  const [bread, setBread] = React.useState('');
  const [meat, setMeat] = React.useState('');
  const [options, setOptions] = React.useState('');

  async function getData() {
    const response = await fetch(`http://localhost:4000/ingredientes`);
    const json = await response.json();
    setData(json);
  }

  async function createBurger() {
    const body = {
      nome: name,
      carne: meat,
      pao: bread,
      opcionais: Array.from(options),
      status: 'Solicitado',
    };

    const dataJson = JSON.stringify(body);

    const response = await fetch('http://localhost:4000/burgers', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: dataJson,
    });

    if (response.ok === true) {
      setMsg({ text: 'Pedido realizado com sucesso!', className: 'sucess' });
      console.log('Deu certo!');
    } else {
      setMsg({ text: 'Ops, algo deu errado :( ', className: 'fail' });
      console.log('Deu errado!');
    }

    // clear messsage
    setTimeout(() => setMsg(null), 3000);

    // clear form
    setName('');
    setMeat('');
    setBread('');
    setOptions('');
  }

  React.useEffect(() => {
    getData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    createBurger();
  }

  if (data === null) return null;
  const { paes, carnes, opcionais } = data;
  return (
    <form onSubmit={handleSubmit} id="burgerForm">
      {msg !== null && <Message text={msg.text} className={msg.className} />}
      <InputText
        id="clientName"
        label="Nome do Cliente"
        value={name}
        setValue={setName}
      />
      <Select
        label="Escolha o pão:"
        name="pao"
        id="pao"
        text="Selecione o seu pão"
        options={paes}
        value={bread}
        setValue={setBread}
      />
      <Select
        label="Escolha a carne do seu Burger:"
        name="carne"
        id="carne"
        text="Selecione o tipo de carne"
        options={carnes}
        value={meat}
        setValue={setMeat}
      />
      <Checkbox
        label="Selecione os opcionais:"
        data={opcionais}
        checkbox={options}
        setCheckbox={setOptions}
      />
      <Button />
    </form>
  );
};

export default Form;
