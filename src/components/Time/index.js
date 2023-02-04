import { Link } from 'react-router-dom';
import styles from './Time.module.css';
import wpicon from './img/wp.png';
import fbicon from './img/fb.png';
import igicon from './img/ig.png';

function Time({ imagem, nome, funcao, wp, fb, ig }) {
    return (
        <div className={styles.container}>
            <img src={imagem} alt={funcao} className={styles.imagem} />
            <div className={styles.info}>
                <h2>{nome}</h2>
                <p>{funcao}</p>
                <div className={styles.info__social}>
                    <Link to={wp}>
                        <img src={wpicon} alt="icone whatsapp" />
                    </Link>
                    <Link to={fb}>
                        <img src={fbicon} alt="icone facebook" />
                    </Link>
                    <Link to={ig}>
                        <img src={igicon} alt="icone instagram" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Time;