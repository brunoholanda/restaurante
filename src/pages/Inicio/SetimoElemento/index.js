import Time from 'components/Time';
import { useEffect, useState } from 'react';
import styles from './SetimoElemento.module.css';

function SetimoElemento() {

    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/brunoholanda/timerestaurante-api/time')
            .then(resposta => resposta.json())
            .then(dados => {
                setTime(dados)
            })
    }, [])

    return (
        <section className={styles.time}>
            <h1>Nosso time</h1>
            <div className={styles.time__card}>
                {time.map((time) => {
                    return <Time {...time} key={time.id} />
                })}
            </div>
        </section>
    )
}

export default SetimoElemento;