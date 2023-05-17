import React from 'react'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom'

function MenuComponent() {
  return (
    <div className={styles.box}>
      <h1>Área Administrativa</h1>
      <div className="d-grid gap-2 col-6 mx-auto">
      <Link to="CadastroBeneficiario" className="btn btn-outline-dark">Cadastrar Beneficiário
          </Link>
          <Link to="PortalBeneficiario" className="btn btn-outline-dark">Pesquisar Beneficiário
          </Link>
        <button className="btn btn-outline-dark" disabled>Cadastrar Funcionário</button>
        <button className="btn btn-outline-dark" disabled>Buscar Funcionário</button>
        <button className="btn btn-outline-dark" disabled>Cadastrar Retirada</button>
      </div>
    </div>
  )
}

export default MenuComponent
