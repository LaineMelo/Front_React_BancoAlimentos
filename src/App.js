import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import PortalBeneficiario from './pages/Beneficiario'
import Funcionario from './pages/Funcionario/index'
import MenuPrincipal from './pages/MenuPrincipal/index'
import CadastroBeneficiario from './pages/Funcionario/CadastroBeneficiario/index'
import About from './pages/About/index'
import Parceiros from './pages/Parceiros/index'
import Header from './components/Header/index'
import SideBar from './components/SideBar/index'
import Footer from './components/Footer/index'
import './App.css';


function App() {
  return (
    <Router>
      <Header />
    <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Parceiros" element={<Parceiros/>} />
          <Route path="/LoginFuncionario/MenuPrincipal" element={<MenuPrincipal />} />
          <Route path="/LoginFuncionario" element={<Funcionario />} />
          <Route path="/LoginFuncionario/MenuPrincipal/CadastroBeneficiario" element={<CadastroBeneficiario />} />
          <Route path="LoginFuncionario/MenuPrincipal/PortalBeneficiario" element={<PortalBeneficiario />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
    <Footer/>
  </Router>
  )
}

export default App;
