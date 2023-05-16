import parceiros from '../../img/parc.jpg'
import styles from './Parceiros.module.css'


function Parceiros (){
    return (
        <div>
            <div className={styles.container}>
            <img src={parceiros} alt="Avatar" className={styles.image}/>
            <div className={styles.overlay}>
              <div className={styles.text}>PARCEIROS</div>
            </div>
            </div>
            <div>
                <p className={styles.title}>Parceiros</p>
                <p className={styles.p}>
                O banco de alimentos desempenha um papel fundamental na gestão e distribuição de cestas alimentares fornecidas pelos generosos parceiros, sejam eles indivíduos altruístas ou cooperativas engajadas. Através dessa colaboração valiosa, o banco é capaz de catalogar e organizar minuciosamente as doações recebidas, permitindo uma distribuição eficiente para a população em situação de insegurança alimentar. Através de parcerias estratégicas com doadores de todos os tipos, o banco de alimentos amplia sua capacidade de arrecadação e atende a um número cada vez maior de pessoas vulneráveis.
                <br/>
                <br/>
                Com a colaboração vital dos parceiros doadores, o banco de alimentos desempenha um papel crucial na luta contra a fome, na redução do desperdício de alimentos e na construção de uma sociedade mais justa e solidária. Juntos, estamos fazendo a diferença, proporcionando alívio e esperança às comunidades em necessidade.
                <br/>
                </p>
            </div>
        </div>
        
    )
    
}
export default Parceiros;