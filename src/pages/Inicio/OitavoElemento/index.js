import styles from './OitavoElemento.module.css';
import banner from './banner.png';
import afonso from './afonso.png';
import kerol from './kerol.png';
import antoni from './antoni.png';

function OitavoElemento() {
    return (
        <section className={styles.elemento}>
            <div>
                <img src={banner} alt="coxas de frango assado" className={styles.banner}/>
            </div>
            <div>
                <h1>Feedback dos clientes</h1>
                <div className={styles.depoimentos}>
                    <img src={afonso} alt="depoimento de um dos nossos clientes" />
                    <img src={kerol} alt="depoimento de um dos nossos clientes" />
                    <img src={antoni} alt="depoimento de um dos nossos clientes" />
                </div>
            </div>
        </section>
    )
}

export default OitavoElemento;