import React from 'react';
import styles from './Tags.module.css';
import cardapios from './../json/cardapio.json';
// import { Container } from './styles';

export default function Tags({tags, filtrarCardapios, setItens}) {
  return (
    <div className={styles.lista}>
        <ul className={styles.lista__lista}>
           {tags.map((tag) => {
              return (
              <li key={tag} onClick={() =>filtrarCardapios(tag)}>
                {tag}
                </li>
              ); 
            })}
           <li onClick={()=> setItens(cardapios)}>Todas</li>
        </ul>
    </div>
  );
}