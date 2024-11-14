
import './App.css'
import TopNavbar1 from "./components/TopNavbar1"
import TopNavbar2 from "./components/TopNavbar2"
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import BestSells from './components/BestSells'
import TrendingSection from './components/TrendingSection'
import Testsection from './components/Testsection'
import GetWindowWidth from './components/GetWindowWidth'
import BottomHeroSection from './components/BottomHeroSection'

function App() {

  return (
    <>  
    <TopNavbar1/>
    <TopNavbar2/>
    <HeroSection/>
    <Categories/>
    <FeaturedProducts/>
    <BestSells/>
    <TrendingSection/>
    <BottomHeroSection/>
    {/* <GetWindowWidth/> */}
    </>
  )
}

export default App
