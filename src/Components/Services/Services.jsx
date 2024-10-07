import React from 'react'
import Scene from '../Cylinder/Scene.jsx'


const Services = () => {
  return (
    <section className='px-4 py-4 my-8 rounded-lg bg-blue'>
        <h1 className='mt-8 text-center text-white uppercase sm:text-[96px] text-7xl bebas'>Our Expertise</h1>
        <p className='mx-auto text-lg sm:text-xl sora text-center sm:w-[50ch] text-off-white'>On-Demand Tech Co-founder Services to Help You Build, Scale, and Automate—Without Breaking the Bank </p>
        <div className='w-full h-[300px] sm:h-[600px] mb-12'>

        <Scene />

        </div>
    </section>
  )
}

export default Services