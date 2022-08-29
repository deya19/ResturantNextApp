import React from 'react'
import Styles from "../../styles/Order.module.css"
import Image from 'next/image';


const Order = () => {
    const status = 0;
    const statusClass = (index) =>{
     if(index - status <1) return Styles.done
     if(index - status === 1) return Styles.inProgress
     if(index - status > 1) return Styles.undone
    }
  return (
    <div className={Styles.container}>
    <div className={Styles.left}>
        <div className={Styles.row}>
        <table className={Styles.table}>
            <tbody>
             <tr className={Styles.trTitle}>
                <th className={Styles.thItem}>Order ID</th>
                <th className={Styles.thItem}>Customer</th>
                <th className={Styles.thItem} >Adress</th>
                <th className={Styles.thItem}>Total</th>
            </tr>
            <tr className={Styles.tr}>
                <td>
                    <span className={Styles.id}>232334212123</span>
                </td>
                <td>
                    <span className={Styles.name}>
                        John Doe
                    </span>
                </td>
                <td>
                    <span className={Styles.address}>Elton st. 212-33 LA</span>
                </td>
                <td>
                    <span className={Styles.total}>$96.50</span>
                </td>
            </tr>
            </tbody>
            </table> 
        </div>
        <div className={Styles.row}>
            <div className={statusClass(0)}>
               <Image src="/img/paid.png" width={30} height={30} alt=''/>
               <span>Payment</span>
               <div className={Styles.checkedIcon}>
               <Image className={Styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=''/>
               </div> 
            </div>
            <div className={statusClass(1)}>
               <Image src="/img/bake.png" width={30} height={30} alt=''/>
               <span>Preparing</span>
               <div className={Styles.checkedIcon}>
               <Image className={Styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=''/>
               </div> 
            </div>
            <div className={statusClass(2)}>
               <Image src="/img/bike.png" width={30} height={30} alt=''/>
               <span>On the way</span>
               <div className={Styles.checkedIcon}>
               <Image className={Styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=''/>
               </div> 
            </div>
            <div className={statusClass(3)}>
               <Image src="/img/delivered.png" width={30} height={30} alt=''/>
               <span>Delivered</span>
               <div className={Styles.checkedIcon}>
               <Image className={Styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=''/>
               </div> 
            </div>
        </div>
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
                <button disabled className={Styles.button}>PAID</button>
            </div>
    </div>
    </div>
  )
}

export default Order;