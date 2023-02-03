import Card from 'components/Card';
import { useEffect, useState } from 'react';
import styles from './QuintoElemento.module.css';

function QuintoElemento() {

    const [cardapio, setCardapio] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/brunoholanda/restaurante-api/cardapio')
            .then(resposta => resposta.json())
            .then(dados => {
                setCardapio(dados)
            })
    }, [])

    return (
        <>
            <section className={styles.container}>
                {cardapio.map((cardapio) => {
                    return <Card {...cardapio} key={cardapio.id} />
                })}
            </section>
        </>
    )
}

export default QuintoElemento;
