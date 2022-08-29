import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from "../styles/Featured.module.css"


const Featured = ({homeRef}) => {
//  const [index,setIndex] = useState(0);
const [currentIndex, setCurrentIndex] = useState(0);
    const images =[
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];

//  const handleArrow = (direction) => {
//     if(direction === "l"){
//         setIndex(index !== 0 ? index - 1 : 2)
//     }
//     if(direction === "r"){
//         setIndex(index !== 2 ? index + 1 : 0)
//     }
//  }


const goToPrevious = () => {
   const isFirstSlide = currentIndex === 0;
   const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
   setCurrentIndex(newIndex);
 };

 const goToNext = () => {
   const isLastSlide = currentIndex === images.length - 1;
   const newIndex = isLastSlide ? 0 : currentIndex + 1;
   setCurrentIndex(newIndex);
 };
    

 useEffect(() => {
   const timer = setInterval(() => {
   //   handleArrow("r");
     goToNext();
   }, 15000);
   return () => {
   clearInterval(timer);
   };
 });



//  console.log(index)

  return (
    <div className={styles.container} ref={homeRef}>
        {/* <div className={styles.arrowContainer} style = {{left:0}} onClick={() => handleArrow("l")}> */}
        <div className={styles.arrowContainer} style = {{left:0}} onClick={goToPrevious}>
           <Image src="/img/arrowl.png" alt='' layout='fill' objectFit='contain'/>
        </div>
     {/* <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            {images.map((img,i) =>(
                <div className={styles.imgContainer} key={i}>
             <Image key={i} src={img} alt='' layout='fill' objectFit='contain'/> 
             </div>
            ))}
     </div> */}
      <div className={styles.wrapper} style={{transform:`translateX(${-100*currentIndex}vw)`}}>
            {images.map((img,i) =>(
                <div className={styles.imgContainer} key={i}>
             <Image key={i} src={img} alt='' layout='fill' objectFit='contain'/> 
             </div>
            ))}
     </div>
    
     {/* <div className={styles.arrowContainer} style = {{right:0}} onClick={() => handleArrow("r")}> */}
     <div className={styles.arrowContainer} style = {{right:0}} onClick={goToNext}>
        <Image src="/img/arrowr.png" alt='' layout='fill' objectFit='contain' />
     </div>
    </div>
  )
            }

            
export default Featured