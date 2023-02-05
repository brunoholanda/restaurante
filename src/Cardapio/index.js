import React from "react";
import styles from './Cardapio.module.css'
import cardapios from '../components/json/cardapio.json';
import { useState } from "react";
import Tags from "components/Tags";
import Card from "components/Card";

function Cardapio() {
  const [itens, setItens] = useState(cardapios);
  const tags = [...new Set(cardapios.map((valor) => valor.tag))]

  const filtrarCardapios = (tag) => {
      const novosCardapios = cardapios.filter((cardapio) => {
        return cardapio.tag === tag;
      })

      setItens(novosCardapios);

  }

  return (
    <section className={styles.galeria}>
        <Tags tags={tags} filtrarCardapios={filtrarCardapios} setItens={setItens}/>
        <Card itens={itens} />
    </section>
  )
}

export default Cardapio;


