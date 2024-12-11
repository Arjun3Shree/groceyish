import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NavBarContextProvider from './context/NavBarContextProvider';

import './App.css'
import Home from './components/Home/Home';
import HotDeals from './components/HotDeals/HotDeals';
import Promotions from './components/Promotions/Promotions';
import TopNavbar1 from './components/Sections/TopNavbar1';
import TopNavbar2 from './components/Sections/TopNavbar2';
import FeaturesSection from './components/Sections/FeaturesSection';
import NewProducts from './components/NewProducts/NewProducts';
import Support from './components/Support/Support';
import DelayInDelevery from './components/Support/DelayInDelevery';
import AfterDelevery from './components/Support/AfterDelevery';
import QualityIssue from './components/Support/QualityIssue';
import Wishlist from './components/WishList/Wishlist';
import Footer from './components/Sections/Footer';



function App() {

  return (
    <>
    <NavBarContextProvider>
    <TopNavbar1/>
    <TopNavbar2/>
    <Router>
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/hotdeals" element={ <HotDeals/> } />
        <Route path='/promotion' element={<Promotions/>} />
        <Route path='/newprds' element={<NewProducts/>} />
        <Route path='/support' element={<Support/>} />
        <Route path='/support/delayindelevery' element={<DelayInDelevery/>} />
        <Route path='/support/afterdelevery' element={<AfterDelevery/>} />
        <Route path='/support/qualityissue' element={<QualityIssue/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>

    </Router>
    <FeaturesSection/>
    <Footer/>

    
    {/* <GetWindowWidth/> */}
    </NavBarContextProvider>
    </>
  )
}

export default App
