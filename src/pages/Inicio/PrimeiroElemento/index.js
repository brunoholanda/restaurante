import styles from './PrimeiroElemento.module.css';
import banner from './banner.png';

function PrimeiroElemento() {
    return (
        <section className={styles.elemento}>
            <div className={styles.elemento__texto}>
                <h1>Reserve a sua mesa e Faça o seu pedido.</h1>
                <p>Coma a comida dos sonhos e com preço acessivel. Não quer sair de casa? Realizamos entrega, chegamos em minutos.</p>
            <div className={styles.elemento__botoes}>
                <button className={styles.elemento__laranja}>VER CARDAPIO</button>
                <button className={styles.elemento__branco}>PEDIR AGORA</button>
            </div>
            </div>
            <div>
                <img src={banner} alt="homem comendo hamburguer" />
            </div>
        </section>
    )
}

export default PrimeiroElemento;