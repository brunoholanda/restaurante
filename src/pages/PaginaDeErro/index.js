import styles from './PaginaDeErro.module.css';
import erro404 from './404.png';

function PaginaDeErro() {
    return (
        <section className={styles.erro}>
            <img src={erro404} alt="imagem da pagina de erro"/>
            <h1>Ops... Pagina não encontrada... Clique em voltar!</h1>
        </section>
    )
}

export default PaginaDeErro;