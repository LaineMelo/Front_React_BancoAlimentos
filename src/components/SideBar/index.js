import { Link } from 'react-router-dom'
import styles from './SideBar.module.css'
import React, { useRef } from 'react';

function SideBar() {
  const sidebarRef = useRef(null);

  function handleMenuToggle() {
    const sidebar = sidebarRef.current;
    const menuBars = sidebar.querySelectorAll(styles.bar);
    sidebar.classList.toggle(styles.active);
    menuBars.forEach(bar => bar.classList.toggle(styles.active));
  }

  return (
    <div className={styles.sidebar} ref={sidebarRef}>
      <div className={styles.toggle} onClick={handleMenuToggle}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {<nav>
        <ul>     
        <li className={styles.item}>
          <Link to="/">Início
          </Link>
          </li>
        <li className={styles.item}>
          <Link to="/LoginFuncionario">Login Funcionário
          </Link>
          </li>
        <li className={styles.item}>
          <Link to="/PortalBeneficiario">Portal Beneficiário
          </Link>
          </li>        
        <li className={styles.item}>
          <Link to="/About">Sobre Nós</Link>
          </li>
        <li className={styles.item}>
          <Link to="/Parceiros">Parceiros
        </Link>
        </li>
        </ul>
      </nav>
      }
    </div>
  )
}

export default SideBar;