import React from "react";
import styles from './formLogin.module.css'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <div className={styles.loginform}>
      <h1 className={styles.h1}>Acesso Funcionário</h1>
      <hr></hr>
      <h2 className={styles.h2}>Login</h2>
      <form className={styles.form}>
        <label htmlFor="username">Usuário</label>
        <input className={styles.input} type="text" id="username" name="username" />

        <label htmlFor="password">Senha</label>
        <input className={styles.input} type="password" id="password" name="password" />
        <Link to="MenuPrincipal" className={styles.button}>Entrar
          </Link>
      </form>

      <a className={styles.forget} href="#">Esqueci minha senha</a>
    </div>
  );
}

export default LoginForm;
