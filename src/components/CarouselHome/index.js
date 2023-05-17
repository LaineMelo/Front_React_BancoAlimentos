import Carousel from 'react-bootstrap/Carousel'
import agricultura from '../../img/imgagrf1.jpg'
import bmaslide from '../../img/imgagrf3.jpg'
import cestasverdes from '../../img/imgagrf2.jpg'
import styles from './CarouselHome.module.css'
import imgSistema from '../../img/imgSistema.png'

function CarouselHome() {
    return (
        <div>
            <div className={styles.titleBox}>
                <h1 className={styles.titleHome}>Banco de Alimentos</h1>
                <h2 className={styles.titleHome}>Sistema de controle e gerenciamento dgit adde cestas</h2>
            </div>
            <div className={styles.carouselInner}>
                    <Carousel  indicators={false}>
                        <Carousel.Item >
                            <img className={styles.img} src={agricultura} alt="Agricultura Familiar" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className={styles.img} src={bmaslide} alt="BMA" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className={styles.img} src={cestasverdes} alt="Cestas Verdes" />
                        </Carousel.Item>
                    </Carousel>
            </div>
        </div>
    )

}

export default CarouselHome;