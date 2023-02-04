import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ id, titulo, imagem, descricao, preco }) {

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={imagem} alt={titulo} className={styles.capa} />
                <div className={styles.link__fundo}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                    <div className={styles.link__botao}>
                        <p>{preco}</p>
                        <button>PEDIR</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;