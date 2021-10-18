import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Pedidos from './Pages/Pedidos/Pedidos';

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Routes>
          <div className="">
            <Route path="/" element={<Home />} />
            <Route path="/pedidos" element={<Pedidos />} />
          </div>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
