import TextoDuasCores from 'components/TextoDuasCores';
import styles from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={styles.rodape}>
                <TextoDuasCores
                    texto="Copyright © 2023. Todos os direitos reservados. Codificação por BrunoHolanda / Design por JonasNunes."
                    palavra1="2023."
                    cor1="#FF5A00"
                    palavra2="BrunoHolanda"
                    cor2="#FF5A00"
                />
          </footer>
    )
}

export default Rodape;