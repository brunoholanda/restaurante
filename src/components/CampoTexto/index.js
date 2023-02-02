import styles from './CampoTexto.module.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className={styles.campotexto}>
            <label>
                {props.label}
            </label>
            <input value={props.valor}  required ={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;