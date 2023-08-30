import React from 'react'

import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import Products from '../../components/Products'
import ContactUs from '../ContactUs'
import '../Home/index.css'

function Home() {
  return (
    <>
    <Carousel/>
    <div className='heading-container'>
    <h2 className='text-4xl font-bold  text-center mt-4'>Categories</h2>
    </div>

    <Main/> 
    <div className='heading-container'>
    <h2 className='text-4xl font-bold  text-center mt-20'> Top Selling Products</h2>
    </div>
    <Products/>
    <ContactUs/>
    <Footer/>
    </>

  )
}

export default Home
