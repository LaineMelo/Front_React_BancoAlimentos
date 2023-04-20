import CarouselHome from '../../components/CarouselHome/index'
import Cards from '../../components/Cards/index'
import styles from './Home.module.css'


function Home() {
    return (
        <div >
            <div>
                <fieldset className={styles.title}>
                    <h1 >Banco de Alimentos</h1>
                    <h2 >Sistema de gerenciamento e controle de distribuição de cestas</h2>
                </fieldset>
                <CarouselHome />
            </div>
            <div>
                <Cards />
            </div>
        </div>

    )
}
export default Home; 