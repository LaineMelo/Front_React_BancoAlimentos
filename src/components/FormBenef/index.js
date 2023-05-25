import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from './FormBenef.module.css'



function FormBenef() {
  
  const [nome, setnome] = useState('');
  const [cpf, setcpf] = useState('');
  const [dataNascimento, setdataNascimento] = useState('');
  const [email, setemail] = useState('');
  const [telefone, settelefone] = useState('');
  const [cep, setcep] = useState('');
  const [logradouro, setlogradouro] = useState('');
  const [numero, setnumero] = useState('');
  const [complemento, setcomplemento] = useState('');
  const [bairro, setbairro] = useState('');
  const [cidade, setcidade] = useState('');
  const [uf, setuf] = useState('');
  const [situacao, setSituacao] = useState(0);
  const [tipoCesta, settipoCesta] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const dataNascimentoDate = new Date(dataNascimento);
    const data = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimentoDate,
      email: email,
      telefone: telefone,
      cep: cep,
      logradouro: logradouro,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      uf: uf,
      situacao: situacao,
      tipoCesta: tipoCesta
    };
    
    setnome('');
    setcpf('');
    setdataNascimento('');
    setemail('');
    settelefone('');
    setcep('');
    setlogradouro('');
    setnumero('');
    setcomplemento('');
    setbairro('');
    setcidade('');
    setuf('');
    setSituacao('');
    settipoCesta('');
    
    try {
      const response = await axios.post('https://beneficiario-back.azurewebsites.net/api/Beneficiario', data);
      console.log(response.data);
      alert('Dados salvos com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Erro ao salvar os dados!');
    }
   
  };
  const navigate = useNavigate();
  return (  
    <div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div >
          <fieldset>
            <h2>Cadastro de Beneficiários</h2>
            <hr></hr>
             <div >
              <button className="btn btn-light btn-sm" onClick={() => navigate(-1)}>Voltar</button>
            </div>
            <legend className={styles.legend}>Dados Pessoais</legend>
           
            <div className='row g-3'>
              <div className='col-12'>
                <label htmlFor="nome">Nome*:</label>
                <input type="text" required title="Campo obrigatório"
                  value={nome}
                  onChange={(e) => setnome(e.target.value)} className="form-control form-control-sm col-12" />
              </div>
              <div className='col-md-4'>
                <label htmlFor="cpf">CPF*:</label>
                <input type="text" required title="Campo obrigatório"
                  value={cpf}
                  onChange={(e) => setcpf(e.target.value)} className="form-control form-control-sm" />
              </div>
              <div className='col-md-4'>
                <label htmlFor="dataNascimento">Data de Nascimento*:</label>
                <input type="date" required title="Campo obrigatório"
                  value={dataNascimento}
                  onChange={(e) => setdataNascimento(e.target.value)} class="form-control form-control-sm" />
              </div>
              <div className='col-md-4'>
                <label htmlFor="telefone">Telefone*:</label>
                <input type="text" required title="Campo obrigatório"
                  value={telefone}
                  onChange={(e) => settelefone(e.target.value)} className="form-control form-control-sm" />
              </div>
              <div className='col-md-6'>
                <label htmlFor="email">E-mail:</label>
                <input type="email" placeholder="@email.com"
                  value={email}
                  onChange={(e) => setemail(e.target.value)} className="form-control form-control-sm" />
              </div>
              <div className='col-md-6'>
                <label htmlFor="cep">CEP*:</label>
                <input type="text" required title="Campo obrigatório"
                  value={cep}
                  onChange={(e) => setcep(e.target.value)} className="form-control form-control-sm" />
              </div>
              <div className='col-md-9'>
                <label htmlFor="logradouro">Logradouro*:</label>
                <input type="text" required title="Campo obrigatório"
                  value={logradouro}
                  onChange={(e) => setlogradouro(e.target.value)} className="form-control form-control-sm" />
              </div>
              <div className='col-md-3'>
                <label htmlFor="numero">Número*:</label>
                <input type="text" required title="Campo obrigatório"
                  value={numero}
                  onChange={(e) => setnumero(e.target.value)} className="form-control form-control-sm" />
              </div>
              <div className='col-md-6'>
                <label htmlFor="bairro">Bairro*:</label>
                <input type="text" required title="Campo obrigatório"
                  value={bairro}
                  onChange={(e) => setbairro(e.target.value)} className="form-control form-control-sm" />
              </div>
              <div className='col-md-6'>
                <label htmlFor="complemento">Complemento*:</label>
                <input type="text"
                  value={complemento}
                  onChange={(e) => setcomplemento(e.target.value)} className="form-control form-control-sm" />
              </div>
              <div className='col-md-8'>
                <label htmlFor="cidade">Cidade*:</label>
                <input type="text" required title="Campo obrigatório"
                  value={cidade}
                  onChange={(e) => setcidade(e.target.value)} className="form-control form-control-sm" />
              </div>
              <div className='col-md-4'>
                <label htmlFor="uf">UF*:</label>
                <input type="text" required title="Campo obrigatório"
                  value={uf}
                  onChange={(e) => setuf(e.target.value)} className="form-control form-control-sm" />
              </div>
              <div>
                <div >
                  <label>Situação</label>
                  <div>
                    <div className={styles.bloco}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="situacao"
                        id="ativo"
                        value="0"
                        checked={situacao === 0}
                        onChange={(event) => setSituacao(Number(event.target.value))}
                      />
                      <label className="form-check-label" htmlFor="ativo">
                        Ativo
                      </label>
                    </div>
                    <div className={styles.bloco}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="situacao"
                        id="inativo"
                        value="1"
                        checked={situacao === 1}
                        onChange={(event) => setSituacao(Number(event.target.value))}
                        disabled
                      />
                      <label className="form-check-label" htmlFor="inativo">
                        Inativo
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label>Tipo de Cesta*</label>
                  <div>
                    <div className={styles.bloco}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tipoCesta"
                        id="basica"
                        value="0"
                        checked={tipoCesta === 0}
                        onChange={(event) => settipoCesta(Number(event.target.value))}
                      />
                      <label className="form-check-label" htmlFor="basica">
                        Básica
                      </label>
                    </div>
                    <div className={styles.bloco}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tipoCesta"
                        id="verde"
                        value="1"
                        checked={tipoCesta === 1}
                        onChange={(event) => settipoCesta(Number(event.target.value))}
                      />
                      <label className="form-check-label" htmlFor="verde">
                        Verde
                      </label>
                    </div>
                    <div className={styles.bloco}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tipoCesta"
                        id="basicaVerde"
                        value="2"
                        checked={tipoCesta === 2}
                        onChange={(event) => settipoCesta(Number(event.target.value))}
                      />
                      <label className="form-check-label" htmlFor="basicaVerde">
                        Básica e Verde
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <p>* Campo obrigatório</p>
          </fieldset>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-info" type="submit">Salvar</button>
        </div>
      </form>
    
    </div>
  )
}

export default FormBenef
