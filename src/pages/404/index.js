import styles from './PaginaDeErro.module.css';
import erro404 from './404.png';
import BotaoLaranja from 'components/BotaoLaranja';
import { useNavigate } from 'react-router-dom';

function PaginaDeErro() {

    const navegar = useNavigate ();

    return (
        <section className={styles.erro}>
            <img src={erro404} alt="imagem da pagina de erro" />
            <div>
            <h1>Ops... Pagina não encontrada... Clique em voltar!</h1>
            <div className={styles.PaginaDeErro__botao} onClick={() => navegar(-1)}>
                <BotaoLaranja>VOLTAR</BotaoLaranja>
            </div>
            </div>
        </section>
    )
}

export default PaginaDeErro;