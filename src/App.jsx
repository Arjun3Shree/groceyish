import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NavBarContextProvider from './context/NavBarContextProvider';

import './App.css'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
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
import MyCart from './components/MyCart/MyCart';
import Footer from './components/Sections/Footer';
import Register from './components/Register/Register';



function App() {

  return (
    <>
      <Router>
      <Routes>
        {/* Login route outside NavBarContextProvider */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        
        {/* All other routes wrapped in NavBarContextProvider */}
        <Route path="/*" element={
          <NavBarContextProvider>
            <TopNavbar1 />
            <TopNavbar2 />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotdeals" element={<HotDeals />} />
              <Route path='/promotion' element={<Promotions />} />
              <Route path='/newprds' element={<NewProducts />} />
              <Route path='/support' element={<Support />} />
              <Route path='/support/delayindelevery' element={<DelayInDelevery />} />
              <Route path='/support/afterdelevery' element={<AfterDelevery />} />
              <Route path='/support/qualityissue' element={<QualityIssue />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/mycart' element={<MyCart />} />
            </Routes>
            <FeaturesSection />
            <Footer />
            {/* <GetWindowWidth/> */}
          </NavBarContextProvider>
        } />
      </Routes>
    </Router>
    </>
  )
}

export default App
