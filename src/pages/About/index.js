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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo nisi, semper a elit eget, pulvinar pulvinar augue. Donec id purus in ligula iaculis varius eu at elit. Sed cursus est vitae nibh pretium sagittis. Aenean elementum et arcu nec lacinia. Duis ac elit maximus, efficitur sem in, placerat ante. Praesent faucibus, nisi sed feugiat pretium, turpis ligula gravida nisl, non dapibus nisi nisl nec nunc. Proin bibendum congue efficitur. Nunc sagittis porta sollicitudin.
                <br/>
                 Nam sodales libero in quam bibendum, ut pharetra lacus commodo. Quisque justo dui, ullamcorper sed placerat eu, scelerisque ut eros. Maecenas magna quam, gravida sed magna eget, feugiat accumsan ligula. Aenean bibendum et dolor sed laoreet. Aenean nisl arcu, rutrum ac commodo et, euismod id odio. Nunc justo purus, semper in nisi eget, dignissim pretium metus. Integer sollicitudin libero eu leo rutrum, et iaculis ligula dapibus. Maecenas vulputate enim lacinia erat fermentum, in consectetur enim convallis.
                <br/>
                <br/>
                Sed id finibus purus, eu porttitor odio.  Etiam a tincidunt nunc, gravida gravida nisl.Duis et justo id est aliquam aliquet ac sit amet diam. Etiam et facilisis purus. Donec vulputate risus eget nisi egestas pellentesque.
                <br/>
                </p>
            </div>
        </div>
        
    )
    
    
    
    
}
export default About;