import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import { ReverseAnimatedButton } from './Components/AnimatedButton/Animatedbutton';
import Hero from './Hero'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import Problem from './Components/Problem'
import Solution from './Components/Solution'
import ChooseUs from './Components/ChooseUs'
import Offer from './Components/Offer'
import PricingComponent from './Components/Pricing'
import GettingStarted from './Components/GettingStarted'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
     <ScrollToTop smooth component={<p style={{ color: "blue", display:"flex", justifyContent:"center", alignItems:"center" }}><FaArrowUp /></p>} />
    <Hero/>
    <Services />
    <Problem />
    <Solution />
    <ChooseUs />
    <Testimonials />
    <Offer />
    <PricingComponent />
    <GettingStarted />
    <Contact />
    <Footer />
    <footer className='flex flex-col justify-between px-4 mt-8 sm:flex-row text-off-white'>
   <div className='order-3 mb-6 opacity-70 sm:order-1'><p className=''>Copyright &copy; 2024 - Code Backwards Lab | All rights reserved</p></div>
   <div className='order-1 sm:order-2'>
    <ul className='flex flex-col gap-8 mb-4 sm:flex-row'>
      <li><a className=' hover:text-blue' href="">Pricing</a></li>
      <li><a className=' hover:text-blue' href="">Terms of services</a></li>
      <li><a className=' hover:text-blue' href="">Privacy Policy</a></li>
    </ul>
   </div>
   <div className='order-2 mb-6 sm:order-3'>
    <ReverseAnimatedButton />
   </div>
    </footer>
    </>
  )
}

export default App