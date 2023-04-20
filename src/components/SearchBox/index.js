import { useState } from 'react';
import styles from './SearchBox.module.css'
import { useNavigate } from 'react-router-dom'

function SearchBox() {
  const [searchId, setSearchId] = useState('');

  function handleSearchChange(event) {
    setSearchId(event.target.value);
  }

  async function handleSearchSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(`https://localhost:7273/api/Beneficiario/${searchId}`);
      const data = await response.json();

      // Cria a tabela HTML a partir dos dados JSON
      const table = document.getElementById('table');

      const tbody = table.createTBody();
      const tr = tbody.insertRow();
      for (const key in data) {
        const td = document.createElement('td');
        const text = document.createTextNode(data[key]);
        td.appendChild(text);
        tr.appendChild(td);
      }
      table.appendChild(tbody);

    } catch (error) {
      console.error(error);
    }

  }

  const navigate = useNavigate();
  return (
    <div className={styles.search}>
      <form className={styles.form} onSubmit={handleSearchSubmit}>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-link btn-sm" onClick={() => navigate(-1)}>Voltar</button>
        </div>
        <label>
          ID de busca:
          
          <input className={styles.input} type="text" value={searchId} onChange={handleSearchChange} />
        </label>
        <button className={styles.button}>Pesquisar</button>
      </form>
      <label>
        Resposta:
        <div className={styles.box}>
          <table id="table" className={styles.table} >
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Cpf</th>
                <th>Data de Nascimento</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Cep</th>
                <th>Logradouro</th>
                <th>N°</th>
                <th>Complemento</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>UF</th>
                <th>Situação</th>
                <th>Cesta</th>
              </tr>
            </thead>
          </table>
        </div>
      </label>
    </div>
  );
}


export default SearchBox