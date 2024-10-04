import React from 'react'
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
    </>
  )
}

export default App