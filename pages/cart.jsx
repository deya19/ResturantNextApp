import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Styles from "../styles/Cart.module.css"


const Cart = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.left}>
            <table className={Styles.table}>
                <tbody>
             <tr className={Styles.trTitle}>
                <th className={Styles.thItem}>Product</th>
                <th className={Styles.thItem} >Name</th>
                <th className={Styles.thItem}>Extras</th>
                <th className={Styles.thItem}>Price</th>
                <th className={Styles.thItem}>Quantity</th>
                <th className={Styles.thItem} >Total</th>
            </tr>
            <tr className={Styles.tr}>
                <td>
                    <div className={Styles.imgContainer}>
                        <Image src="/img/pizza.png" layout='fill' objectFit='cover' alt=''/>
                    </div>
                </td>
                <td>
                    <span className={Styles.name}>CORALZO</span>
                </td>
                <td>
                    <span className={Styles.extras}>
                        Double integredient, spicy sause
                    </span>
                </td>
                <td>
                    <span className={Styles.price}>$19.90</span>
                </td>
                <td>
                    <span className={Styles.quantity}>2</span>
                </td>
                <td>
                    <span className={Styles.total}>$39.80</span>
                </td>
            </tr>
            <tr className={Styles.tr}>
                <td>
                    <div className={Styles.imgContainer}>
                        <Image src="/img/pizza2.png" layout='fill' objectFit='cover' alt=''/>
                    </div>
                </td>
                <td>
                    <span className={Styles.name}>Siciian</span>
                </td>
                <td>
                    <span className={Styles.extras}>
                        Double integredient 
                    </span>
                </td>
                <td>
                    <span className={Styles.price}>$18.90</span>
                </td>
                <td>
                    <span className={Styles.quantity}>3</span>
                </td>
                <td>
                    <span className={Styles.total}>$56.70</span>
                </td>
            </tr>
            </tbody>
            </table>
        </div>
        <div className={Styles.right}>
            <div className={Styles.wrapper}>
                <h2 className={Styles.title}>CART TOTAL</h2>
                <div className={Styles.totalText}>
                    <b className={Styles.totalTextTitle}>Subtotal:</b><span className={Styles.sizePrice}>$96.50</span>
                </div>
                <div className={Styles.totalText}>
                    <b className={Styles.totalTextTitle}>Discount:</b><span className={Styles.sizePrice}>$0.00</span>
                </div>
                <div className={Styles.totalText}>
                    <b className={Styles.totalTextTitle}>Total:</b><span className={Styles.sizePrice}>$96.50</span>
                </div>
                 <Link href={`/orders/1`}><button className={Styles.button}>CHECKOUT NOW!</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Cart;