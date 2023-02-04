import styles from './Categorias.module.css';
import bolo from './img/bolo.png';
import sushi from './img/sushi.png';
import esfirra from './img/esfirra.png';
import bebidas from './img/bebidas.png';
import hamburguer from './img/hamburguer.png';
import vegano from './img/vegano.png';

function Categorias() {
    return (
        <section className={styles.categorias}>
            <div className={styles.categorias__botao}>
            <button>
                <img src={bolo} alt="icone de bolo" />
                <p>Bolos/Doces</p>
            </button>
            <button>
                <img src={sushi} alt="icone de bolo" />
                <p>Sushi</p>
            </button>
            <button>
                <img src={esfirra} alt="icone de bolo" />
                <p>Esfirras</p>
            </button>
            <button>
                <img src={bebidas} alt="icone de bolo" />
                <p>Bebidas</p>
            </button>
            <button>
                <img src={hamburguer} alt="icone de bolo" />
                <p>Hambúrgueres</p>
            </button>
            <button>
                <img src={vegano} alt="icone de bolo" />
                <p>Veganos</p>
            </button>
            </div>
        </section>
    )
}

export default Categorias;