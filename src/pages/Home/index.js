import CarouselHome from '../../components/CarouselHome/index'
import Cards from '../../components/Cards/index'
import solidarity from '../../img/solidarity.png'
import styles from './Home.module.css'


function Home() {
    return (
        <div >
            <div>
                <fieldset className={styles.title}>
                    <img src={solidarity} className={styles.imgTop}></img>
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