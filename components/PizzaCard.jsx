import Image from 'next/image';
import React from 'react'
import { TypePizza } from '../pages/api/hello';
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link"

function PizzaCard({ListRef}) {

  return (
    <div className={styles.container} ref={ListRef} >
      {TypePizza.map(pizza => (  
      <div className={styles.part} key={pizza.id}>
      <Image src={pizza.image} alt='' width="500" height="500" />
      <h1 className={styles.title}>{pizza.name}</h1>
      <span className={styles.price}>{pizza.price}</span>
      <p className={styles.desc}>
       {pizza.desc}
      </p>
      <Link href={`/products/${pizza.id}`}><a className={styles.button}>Add to Basket</a></Link>
      </div>
      ))}
        {/* <Image src='/img/pizza.png' alt='' width="500" height="500"/>
        <h1 className={styles.title}>FIORI DI ZUCCA</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p> */}
    </div>
  )
}





export default PizzaCard


