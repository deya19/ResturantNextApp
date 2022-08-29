import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'



export default function Home({homeRef,ListRef,ProductRef}) {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resturant in Amman</title>
        <meta name='description' content='Best pizza shop in town'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
       <Featured homeRef={homeRef}/>
       <PizzaList ListRef={ListRef} ProductRef={ProductRef}/>
    </div>
  )
}


