import styles from './TerceiroElemento.module.css';

function TerceiroElemento() {
    return (
        <section className={styles.elemento}>
            <div className={styles.elemento__texto}>
                <h1>Temos diversos sabores para o seu paladar.</h1>
                <p>Navegue pelo nosso cardápio. Temos desde os grandes pratos brasileiros até todas as culinárias orientais e árabes. </p>
            </div>
        </section>
    )
}

export default TerceiroElemento;