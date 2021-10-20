import React from 'react';
import InputText from './InputText.js';
import './FormBurger.css';
import Select from './Select.js';
import Checkbox from './Checkbox.js';
import Button from './Submit.js';
import useForm from '../../Hooks/useForm';
import { API_URL } from '../../api';

const Form = ({ msg, setMsg }) => {
  const [data, setData] = React.useState(null);

  const name = useForm();
  const bread = useForm();
  const meat = useForm();
  const options = useForm(false);

  async function getData() {
    const response = await fetch(`http://localhost:4000/ingredientes`);
    const json = await response.json();
    setData(json);
  }

  async function createBurger(name, meat, bread, options) {
    const body = {
      nome: name,
      carne: meat,
      pao: bread,
      opcionais: Array.from(options),
      status: 'Solicitado',
    };

    const dataJson = JSON.stringify(body);

    const response = await fetch(`${API_URL}/burgers`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: dataJson,
    });

    if (response.ok === true) {
      setMsg({ text: 'Pedido realizado!', className: 'create' });
      console.log('Deu certo!');
    } else {
      setMsg({ text: 'Ops, algo deu errado :( ', className: 'error' });
      console.log('Deu errado!');
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    name.validate();
    bread.validate();
    meat.validate();
    if (name.validate() && bread.validate() && meat.validate()) {
      name.setValue('');
      meat.setValue('');
      bread.setValue('');
      for (let i = 0; i < data.opcionais.length; i++) {
        document.getElementById(data.opcionais[i].tipo).checked = false;
      }
      options.setValue([]);
      createBurger(name.value, meat.value, bread.value, options.value);
    }
  }

  if (data === null) return null;
  const { paes, carnes, opcionais } = data;
  return (
    <>
      <form onSubmit={handleSubmit} id="burgerForm">
        <InputText
          label="Nome do cliente:"
          id="nome"
          placeholder="Digite seu nome"
          value={name.value}
          {...name}
        />
        <Select
          label="Escolha o pão:"
          name="pao"
          id="pao"
          text="Selecione o seu pão"
          options={paes}
          value={bread.value}
          {...bread}
        />
        <Select
          label="Escolha a carne do seu Burger:"
          name="carne"
          id="carne"
          text="Selecione o tipo de carne"
          options={carnes}
          value={meat.value}
          {...meat}
        />
        <Checkbox
          label="Selecione os opcionais:"
          options={opcionais}
          {...options}
        />
        <Button />
      </form>
    </>
  );
};

export default Form;
