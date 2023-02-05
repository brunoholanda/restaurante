import styles from './RodapeInfo.module.css';
import logo from './logo-branca.png'
import { Link } from 'react-router-dom';
import CampoTexto from 'components/CampoTexto';
import mail from './img/mail.png';
import cell from './img/cell.png';
import wp from './img/wp.png';

function RodapeInfo() {
    return (
        <footer className={styles.rodapeinfo}>
            <div>
                <img src={logo} alt="logo branca do restaurante" />
            </div>
            <section className={styles.rodapeinfo__links}>
                <h3>NAVEGAÇÃO</h3>
                <nav>
                    <Link to="./">Home</Link>
                    <Link to="./delivery">Delivery</Link>
                    <Link to="./cardápio">Cardápio</Link>
                    <Link to="./contato">Contato</Link>
                </nav>
            </section>
            <section className={styles.rodapeinfo__links}>
                <h3>CONTATO</h3>
                <p>exemplo@gmail.com</p>
                <p>81 99764-5036</p>
                <p>+55 81 99764-5036</p>
            </section>
            <section className={styles.rodapeinfo__links}>
                <h3>NEWS LETTER</h3>
                <CampoTexto 
                    obrigatorio={true}
                    placeholder="Digite seu nome"
                />
                 <CampoTexto 
                    obrigatorio={true}
                    placeholder="Digite seu e-mail"
                />
                <button>Enviar</button>
            </section>
        </footer>
    )
}

export default RodapeInfo;