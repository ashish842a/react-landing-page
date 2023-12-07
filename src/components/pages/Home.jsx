import React from 'react'
import Nav from '../Nav/Nav'
import Banner from '../Banner/Banner'
import Main from '../Home/Main'
import About from '../About/About'
import Footer from '../Footer/Footer'


function Home() {
  return (
   <>
    <Nav />
    <Banner />
    <Main imgUrl={"https://www.w3schools.com/w3images/jane.jpg"}/>
    <About />
    <Footer />
   </>
  )
}

export default Home