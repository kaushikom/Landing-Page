import React from 'react'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AnimatedButton } from './Components/AnimatedButton/Animatedbutton';
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
    <footer className='justify-between px-4 my-8 sm:flex text-off-white'>
   <div className='opacity-70'><h6 className='flex items-center gap-1'><RiMoneyDollarCircleLine /><span>Hire a Tech Co-founder Without Breaking the Bank.</span></h6><p>Copyright &copy; 2024 - All rights reserved</p></div>
   <div>
    <ul className='gap-8 my-6 sm:flex'>
      <li><a className='hover:text-blue' href="">Pricing</a></li>
      <li><a className='hover:text-blue' href="">Terms of services</a></li>
      <li><a className='hover:text-blue' href="">Privacy Policy</a></li>
    </ul>
   </div>
   <div>
    <AnimatedButton />
   </div>
    </footer>
    </>
  )
}

export default App