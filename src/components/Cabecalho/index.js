import CabecalhoLink from 'components/CabecalhoLink';
import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './logo.png';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo do restaurante"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./delivery">
                    Delivery
                </CabecalhoLink>
                <CabecalhoLink url="./cardapio">
                    Cardápio
                </CabecalhoLink>
                <CabecalhoLink url="./contato">
                    Contato
                </CabecalhoLink>
            </nav>
            <button>
                Pedir Agora
            </button>
        </header>
    )
}

export default Cabecalho;