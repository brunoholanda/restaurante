import Card from 'components/Card';
import Categorias from 'components/Categorias';
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
        <section className={styles.elemento}>
            <div>
                <Categorias />
            </div>
            <div className={styles.container}>
                {cardapio.map((cardapio) => {
                    return <Card {...cardapio} key={cardapio.id} />
                })}
            </div>
        
        </section>
    )
}

export default QuintoElemento;
