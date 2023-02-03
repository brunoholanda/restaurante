import styles from './SextoElemento.module.css';


function SextoElemento() {
    return (
        <section className={styles.elemento}>
            <div className={styles.elemento__texto}>
                <h1>Grandes ofertas do dia.</h1>
                <p>Venha nos visitar e experimente a nossa culinária incrível. não perca a chance de aproveitar as nossas grandes ofertas do dia!</p>
                <p>Aproveite os melhores pratos do nosso cardápio com preços imperdíveis.</p>
                <div className={styles.elemento__botoes}>
                    <button className={styles.elemento__laranja}>VER CARDÁPIO</button>
                </div>
            </div>
        </section>
    )
}

export default SextoElemento;