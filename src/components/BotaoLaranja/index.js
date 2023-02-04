import styles from './BotaoLaranja.module.css'

const BotaoLaranja = (props) => {
    return (
        <button className={styles.botao}>
            {props.children}
        </button>
    )
}

export default BotaoLaranja;