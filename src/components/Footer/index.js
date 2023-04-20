import styles from './Footer.module.css'
import Logo from '../../img/logo.png'

function Footer(){
    return( 
        <div>
            <footer>
                <p className={styles.footer}>
                    <span>BANCO DE ALIMENTOS</span> &copy; 2023
                    <img className={styles.logo} src={Logo} alt='Logo'></img>
                </p>
            </footer>
        </div>
    )
}

export default Footer;