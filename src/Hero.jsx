import React from 'react'
import AnimatedButton from './Components/AnimatedButton/Animatedbutton.jsx'
import LogoSlider from './Components/LogoSlider/LogoSlider.jsx'
import Logo from './assets/logo-lg.png'
const Hero = () => {
  return (
    <>
  <nav className='relative flex flex-col items-center justify-center gap-4 my-2 sm:flex-row'>
  <h1 className='text-4xl text-center text-white roboto-medium'><img className='w-auto h-[100px]' src={Logo} alt="" /></h1>
  <button className='px-4 py-3 text-sm text-white uppercase rounded-full hover:border-white hover:border-2 hover:bg-black sm:absolute sm:right-4 bg-blue sora'>Get Started</button>
</nav>
<h1 className='w-3/4 mx-auto mt-20 text-center text-white uppercase heading-size bebas'>Hire a <span className='text-blue'>Tech Co-founder</span> Without Breaking the Bank.</h1>
<p className='w-1/2 mx-auto mt-8 text-center uppercase text-off-white'>Your Startup’s Tech Partner, Delivered Affordably and On-Demand 

Need tech expertise to scale your startup but don’t want to give up equity or pay exorbitant fees? </p>
<div className='flex justify-center mt-8'>
<AnimatedButton />
</div>
<div>
  <h3 className='mt-12 text-[60px] text-center text-off-white unbounded-bold'>Brands that <span className='text-blue'>trust</span> us</h3>
  <LogoSlider />
</div>
    </>
  )
}

export default Hero