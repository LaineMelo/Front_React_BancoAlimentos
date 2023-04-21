import React from "react"
import card1Img from '../../img/agrv1a.png' 
import card2Img from '../../img/doacv1.png' 
import card3Img from '../../img/doacv2a.png' 
import card4Img from '../../img/instv1a.png'
import styles from "./Cards.module.css"

const Cards = () => {
  return (           
        <div className={styles.background}>
          <div className={styles.container}>
            <h2 className={styles.titleH2}>Onde Chegamos</h2>
            <div className={styles.card}>
              <img src={card1Img} alt="Imagem 1" className={styles.image} />
              <h3 className={styles.title}>Colaboradores</h3>
              <p className={styles.text}>
                ---
              </p>
            </div>
            <div className={styles.card}>
              <img src={card2Img} alt="Imagem 2" className={styles.image} />
              <h3 className={styles.title}>Cestas Básicas</h3>
              <p className={styles.text}>
                ---
              </p>
            </div>
            <div className={styles.card}>
              <img src={card3Img} alt="Imagem 3" className={styles.image} />
              <h3 className={styles.title}>Cestas Verdes</h3>
              <p className={styles.text}>
                ---
              </p>
            </div>
            <div className={styles.card}>
              <img src={card4Img} alt="Imagem 4" className={styles.image} />
              <h3 className={styles.title}>Famílias atendidas</h3>
              <p className={styles.text}>
                ---
              </p>
            </div>
          </div>
        </div>
 
    
  );
};

export default Cards;

