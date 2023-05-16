import sobrenos from '../../img/sn3.jpg'
import styles from './About.module.css'

function About (){
    return (
        <div>
            <div className={styles.container}>
            <img src={sobrenos} alt="Avatar" className={styles.image}/>
            <div className={styles.overlay}>
              <div className={styles.text}>SOBRE NÓS</div>
            </div>
            </div>
            <div>
            <p className={styles.title}>Sobre Nós</p>
                <p className={styles.p}>
                O Banco de Alimentos é uma aplicação web que auxilia no cadastramento de beneficiários para a redistribuição de cestas básicas e cestas verdes. A equipe responsável pelo desenvolvimento da aplicação compreende a importância dessa iniciativa e está sempre disponível para fornecer todo o suporte necessário.
                <br/>
                <br/>
                O sistema foi criado para facilitar o gerenciamento de beneficiários em programas de doação de alimentos. Com a aplicação, é possível cadastrar todas as informações necessárias para garantir que as cestas cheguem às pessoas que realmente precisam delas.
                <br/>
                <br/>
                A situação atual tem sido difícil para muitas pessoas, e o Banco de Alimentos tem como objetivo aliviar essa pressão ao fornecer alimentos saudáveis e nutritivos. A aplicação é confiável e eficiente, garantindo que as doações cheguem a quem precisa. A equipe está pronta para ajudar a criar uma rede de apoio forte e capacitada. Juntos, podemos fazer a diferença na vida das pessoas.
                <br/>
                </p>
            </div>
        </div>
        
    )
    
    
    
    
}
export default About;