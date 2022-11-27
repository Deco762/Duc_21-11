import React from 'react'
import Announcement from '../Components/asset/Announcement'
import Categories from '../Components/Categories/Categories'
import Footer from '../Components/asset/Footer'
import Navbar from '../Components/asset/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Product/Product.js'
import Slider from '../Components/Slider/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
