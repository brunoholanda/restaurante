import BotaoLaranja from 'components/BotaoLaranja';
import styles from './SextoElemento.module.css';


function SextoElemento() {
    return (
        <section className={styles.elemento}>
            <div className={styles.elemento__texto}>
                <h1>Grandes ofertas do dia.</h1>
                <p>Venha nos visitar e experimente a nossa <br></br>culinária incrível. não perca a chance de <br></br>aproveitar as nossas grandes ofertas do dia!</p>
                <p>Aproveite os melhores pratos do nosso <br></br>cardápio com preços imperdíveis.</p>
                <div className={styles.elemento__botoes}>
                    <BotaoLaranja>
                        VER CARDÁPIO
                    </BotaoLaranja>
                </div>
            </div>
        </section>
    )
}

export default SextoElemento;