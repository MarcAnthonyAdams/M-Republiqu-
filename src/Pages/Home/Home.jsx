import React from 'react'
import Categories from '../../Components/Catagories/Categories'
import Contact from '../../Components/Contact/Contact'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Slider from '../../Components/Slider/Slider'

function Home() {
  return (
    <div className="home">
        <Slider />
        <FeaturedProducts type="featured" />
        <Categories />
        <FeaturedProducts type="trending" />
        <Contact />
    </div>
  )
}

export default Home