import React from 'react'
import BestSells from '../Sections/BestSells'
import HeroSection from '../Sections/HeroSection'
import Categories from '../Sections/Categories'
import FeaturedProducts from '../Sections/FeaturedProducts'
import TrendingSection from '../Sections/TrendingSection'
import BottomHeroSection from '../Sections/BottomHeroSection'
import Footer from '../Sections/Footer'
import FeaturesSection from '../Sections/FeaturesSection'

function Home() {
  return (
    <>
    <HeroSection/>
    <Categories/>
    <FeaturedProducts/>
    <BestSells/>
    <TrendingSection/>
    <BottomHeroSection/>
    </>
  )
}

export default Home