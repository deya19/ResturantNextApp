import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children,homeRef,ListRef,FooterRef,ProductRef}) => {

  return (
    <>
        <Navbar homeRef={homeRef} ListRef={ListRef} FooterRef={FooterRef} ProductRef={ProductRef}/>
        {children}
        <Footer FooterRef={FooterRef}/>
    </>
  )
}

export default Layout