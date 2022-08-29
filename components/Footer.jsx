import Image from 'next/image'
import React from 'react'
import Styles from "../styles/Footer.module.css"
const Footer = ({FooterRef}) => {
  return (
    <div className={Styles.container} ref={FooterRef}>
      <div className={Styles.items}>
        <Image src="/img/bg.png" layout='fill' objectFit='cover' alt=''/>
      </div>
      <div className={Styles.items}>
        <div className={Styles.card}>
         <h2 className={Styles.motto}> 
          OH YES, WE DID . THE PIZZA, WELL BAKED SLICE OF PIZZA.
         </h2>
        </div>
        <div className={Styles.card}>
          <h1 className={Styles.title}>FIND OUR RESTURANTS</h1>
          <p className={Styles.text}>
            1654 F.ZAHRAA Road #304
            <br/> AMMAN, 423212
            <br/> (232) 323-2122
          </p>
          <p className={Styles.text}>
            1654 F.ZAHRAA Road #304
            <br/> AMMAN, 423212
            <br/> (232) 323-2122
          </p>
          <p className={Styles.text}>
            1654 F.ZAHRAA Road #304
            <br/> AMMAN, 423212
            <br/> (232) 323-2122
          </p>
          <p className={Styles.text}>
            1654 F.ZAHRAA Road #304
            <br/> AMMAN, 423212
            <br/> (232) 323-2122
          </p>
        </div>
        <div className={Styles.card}>
          <h1 className={Styles.title}>WORKING HOURS</h1>
          <p className={Styles.text}>
           MONDAY UNTIL FRIDAY 
           <br/> 9:00 - 22:00
          </p>
          <p className={Styles.text}>
           SATURDAY - SUNDAY
           <br/> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer