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
      table.innerHTML = ''
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
    setSearchId('');
  }

  async function handleDeleteSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(`https://localhost:7273/api/Beneficiario/${searchId}`, {
      method: 'DELETE'
    });
      // Remove todas as linhas da tabela
      const table = document.getElementById('table');
      const tbody = table.getElementsByTagName('tbody')[0];
      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }

      // Exibe uma mensagem de sucesso
      alert('Usuário excluído com sucesso!');

    } catch (error) {
      console.error(error);
    }
  }

  

  const navigate = useNavigate();
  return (

    <div className={styles.search}>
      <h1>Pesquisar Beneficiário Cadastrado</h1>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-link btn-sm position-absolute top-10 end-50 translate-middle-y" onClick={() => navigate(-1)}>Voltar</button>
        </div>
      <form className={styles.form} onSubmit={handleSearchSubmit}>
        
        <label>
          ID de busca:
          
          <input className="form-control" type="text" value={searchId} onChange={handleSearchChange} />
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
      <form onClick={handleDeleteSubmit}>
        <button className="btn btn-outline-danger" type="submit">Excluir </button>
      </form>
    </div>
  );
}


export default SearchBox