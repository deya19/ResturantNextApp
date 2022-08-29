import { useRef } from 'react';
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const homeRef = useRef(null);
  const ProductRef = useRef(null);
  const ListRef = useRef(null);
  const FooterRef = useRef(null);
 
 
  return(
  <Layout homeRef={homeRef} ProductRef={ProductRef} ListRef={ListRef} FooterRef={FooterRef}>
<Component {...pageProps} homeRef={homeRef} ListRef={ListRef} ProductRef={ProductRef} />
  </Layout>
  )
}

export default MyApp
