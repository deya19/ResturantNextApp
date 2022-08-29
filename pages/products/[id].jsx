import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import Styles from "../../styles/Product.module.css"



const Product = (props) => {
     const [size , setSize] = useState(0);
     const [message, setMessage] = useState(1);
  //  const pizza = {
  //   id:1,
  //   img: "/img/pizza.png",
  //   name:"CAMPAGNOLA",
  //   PRICE:[19.9, 23.9 , 27.9],
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fugit ipsum animi cum ipsam quasi alias autem perspiciatis? Corrupti, aliquam?"
  //  }
      const handleChange = event => {
      setMessage(event.target.value);
      }

  return (
    <div className={Styles.container}>
    <div className={Styles.left}>
        <div className={Styles.imgContainer}>
            <Image src={props.pizza.img} layout = "fill" objectFit='contain' alt=''/> 
        </div>
    </div>
    <div className={Styles.right}>
      <h1 className={Styles.title}>{props.pizza.name}</h1>
      <span className={Styles.price}>${parseFloat(props.pizza.PRICE[size]*message).toFixed(2)}</span>
      <p className={Styles.desc}>{props.pizza.desc}</p>
      <h3 className={Styles.choose}>Choose the size</h3>
      <div className={Styles.sizes}>
        <div className={Styles.size} onClick={() => setSize(0)}>
         <Image src="/img/size.png" layout='fill' alt=''/>
         <span className={Styles.number}>Small</span>
        </div>
        <div className={Styles.size} onClick={() => setSize(1)} >
         <Image src="/img/size.png" layout='fill' alt=''/>
         <span className={Styles.number}>Medium</span>
        </div>
        <div className={Styles.size} onClick={() => setSize(2)}>
         <Image src="/img/size.png" layout='fill' alt=''/>
         <span className={Styles.number}>Large</span>
        </div>
      </div>
      <h3 className={Styles.choose}>Choose additional ingredients</h3>
      <div className={Styles.ingredients}>
        <div className={Styles.option}>
          <input type="checkbox" id='douple' name='douple' className={Styles.checkbox} />
          <label htmlFor='douple'>Douple Ingredients</label>
        </div>
        <div className={Styles.option}>
          <input type="checkbox" id='cheese' name='cheese' className={Styles.checkbox} />
          <label htmlFor='cheese'>Extra Cheese</label>
        </div>
        <div className={Styles.option}>
          <input type="checkbox" id='spicy' name='spicy' className={Styles.checkbox} />
          <label htmlFor='spicy'>Spicy Sauce</label>
        </div>
        <div className={Styles.option}>
          <input type="checkbox" id='garlic' name='garlic' className={Styles.checkbox} />
          <label htmlFor='garlic'>Garlic Sause</label>
        </div>
      </div>
      <div className={Styles.add}>
        <input type="number" min="1" className={Styles.quantity} onChange={handleChange} value={message}/>
        {console.log(message)}
        <Link href={`/cart`}><button className={Styles.button}>Add to Cart</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Product

export async function getStaticPaths(){
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

const paths = data.map(d => {
  return {
    params: {id:`${d.id}`}
  }
})

  return{
    paths: paths,
    fallback:false,
  }
}

export async function getStaticProps(context){
  const res = await fetch(`http://localhost:3000/api/products/${context.params.id}`)
  const data = await res.json();

  return{
    props:{
      pizza:data
    }
  }
}