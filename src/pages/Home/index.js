import CarouselHome from '../../components/CarouselHome/index'
import Cards from '../../components/Cards/index'
import solidarity from '../../img/solidarity.png'
import styles from './Home.module.css'
import imgSistema from '../../img/imgSistema.png'


function Home() {
    return (
        <div >
            <div> 
                <img src={imgSistema} className={styles.imgTop}></img>     
                <CarouselHome />
            </div>
            <div>
                <Cards />
            </div>
        </div>

    )
}
export default Home; 