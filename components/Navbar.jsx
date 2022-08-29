import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import Link from "next/link"


const Navbar = ({homeRef,ProductRef,ListRef,FooterRef}) => {
  
  // const handleScroll = (ref) => {
  //   window.scrollTo({
  //     top: ref.offsetTop,
  //     left: 0,
  //     behavior: "smooth",
  //   })};

  return (
    <div className={styles.container}>

    <div className={styles.item}>
      <div className={styles.callButton}>
        <Image src="/img/telephone.png" alt="" width="32" height="32"/>
      </div>
     <div className={styles.texts}>
      <div className={styles.text}>ORDER NOW!</div>
      <div className={styles.text}>012 345 678</div>
     </div>
    </div>
    <div className={styles.item}>
      <ul className={styles.list}>
       <li className={styles.listItem} /*onClick={() => {handleScroll(homeRef.current)}}*/>Homepage</li>
        <li className={styles.listItem} /*onClick={() => {handleScroll(ProductRef.current)}}*/>Products</li>
        <li className={styles.listItem} /*onClick={() => {handleScroll(ListRef.current)}}*/>Menu</li>
        <Image src ="/img/logo.png" alt='' width="160px" height="69px"/>
        <li className={styles.listItem}>Events</li>
        <li className={styles.listItem}>Blog</li>
        <li className={styles.listItem} /*onClick={() => {handleScroll(FooterRef.current)}}*/>Contact</li>
      </ul>
    </div>
    <div className={styles.item}>
    <Link href={"/cart"} >
      <div className={styles.cart}>
      <Image src ="/img/cart.png" alt='' width="35px" height="35px"/>
      <div className={styles.counter}>2</div>
      </div>
    </Link>
    </div>
    </div>
  )
}

export default Navbar