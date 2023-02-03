import styles from './SegundoElemento.module.css';
import banner from './banner.png';
import pedidos from '../SegundoElemento/icones/pedidos.png';
import reservas from '../SegundoElemento/icones/reserva.png';
import chefs from '../SegundoElemento/icones/chefs.png';
import servicos from '../SegundoElemento/icones/servicos.png';
import { Link } from 'react-router-dom';

function SegundoElemento() {
    return (
        <section className={styles.elemento}>
            <div>
                <img src={banner} alt="um prato refinado" className={styles.elemento__banner} />
            </div>
            <div className={styles.elemento__texto}>
                <h1>Entregamos nas seguintes regiões: Jaboatão dos Guararapes, Recife e Cabo.</h1>
                <p>Uma variedade de alimentos com menos sal, açucares e totalmente naturais, sem adições de industrializados, é essencial para uma comida saborosa e saudável.</p>
                <div className={styles.elemento__botoes}>
                    <button className={styles.elemento__laranja}>VER CARDAPIO</button>
                </div>
                <div className={styles.elemento__cards}>
                    <Link to="*">
                    <div className={styles.elemento__card}>
                        <img src={pedidos} alt="icone de pedidos"></img>
                        <p>Pedidos online</p>
                    </div>
                    </Link>
                    <Link to="*">
                    <div className={styles.elemento__card}>
                        <img src={reservas} alt="icone de pedidos"></img>
                        <p>Reservas</p>
                    </div>
                    </Link>
                    <Link to="*">
                    <div className={styles.elemento__card}>
                        <img src={chefs} alt="icone de pedidos"></img>
                        <p>Super chefs</p>
                    </div>
                    </Link>
                    <Link to="*">
                    <div className={styles.elemento__card}>
                        <img src={servicos} alt="icone de pedidos"></img>
                        <p>Serviços</p>
                    </div>
                    </Link>
                </div>
            </div>


        </section>
    )
}

export default SegundoElemento;