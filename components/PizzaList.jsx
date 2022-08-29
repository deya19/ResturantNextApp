import React from 'react'
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';

const PizzaList = ({ListRef,ProductRef}) => {
  return (
    <div className={styles.container} ref={ProductRef}>
     <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
     <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente id nobis quis perspiciatis nisi hic cupiditate, 
        in culpa debitis! Mollitia similique odit totam fugit at possimus? Iusto odio, accusamus fuga architecto atque veritatis 
        deleniti explicabo vel, minima eligendi itaque. Mollitia commodi quisquam repudiandae architecto, aut atque vel optio odio
         quam aperiam debitis ad accusantium, asperiores iste. Vel eligendi, natus dicta atque a eaque libero tempore,
         quaerat aperiam, earum officia?
     </p>
     <div className={styles.wrapper}  >
        <PizzaCard ListRef ={ListRef}/>
     </div>
    </div>
  )
}

export default PizzaList