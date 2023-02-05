import styles from './PrimeiroElemento.module.css';
import banner from './banner.png';
import BotaoLaranja from 'components/BotaoLaranja';
import TextoDuasCores from 'components/TextoDuasCores';

function PrimeiroElemento() {

    return (
        <section className={styles.elemento}>
            <div className={styles.elemento__texto}>
                <TextoDuasCores
                    texto="Reserve a sua mesa e "
                    palavra1="Reserve"
                    cor1="#FF5A00"
                />
                <TextoDuasCores
                    texto="Faça o seu pedido."
                    palavra1="Faça"
                    cor1="#FF5A00"
                />

                <p>Coma a comida dos sonhos e com preço acessivel. Não quer sair de casa? Realizamos entrega, chegamos em minutos.</p>
                <div className={styles.elemento__botoes}>
                    <BotaoLaranja>
                        VER CARDÁPIO
                    </BotaoLaranja>
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