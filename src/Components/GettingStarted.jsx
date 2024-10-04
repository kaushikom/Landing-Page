import React from 'react'

const GettingStarted = () => {
  return (
    <section className='flex flex-col gap-8 px-6 my-32 sm:flex-row sm:justify-center blue-blur'>
        {/* Headings */}
        <div className='sm:w-1/2'>
            <h1 className='text-5xl text-white unbounded sm:text-7xl'>Getting started <br /> is <span className='text-blue'>simple.</span></h1>
            <h4 className='my-8 text-xl sm:text-2xl mt-14 text-off-white sora'>Here’s How to Book Your Consultation in 3 Easy Steps: </h4>
        </div>
        {/* Pointers */}
        <div className=' sm:w-2/5'>
            <ul className='px-3 list-decimal'>
                <li className='mb-8 text-lg text-white sm:text-2xl'>
                    <h4 className='mb-2 text-lg sm:text-2xl text-off-white unbounded'>Choose your plan</h4>
                    <p className='font-bold text-slate sm:text-xl'>Select the consultation tier that fits your needs—whether it’s quick advice or comprehensive, long-term support.</p>
                </li>
                <li className='mb-8 text-lg text-white sm:text-2xl'>
                    <h4 className='mb-2 text-lg sm:text-2xl text-off-white unbounded'>Book an Introductory Call</h4>
                    <p className='font-bold text-slate sm:text-xl'>Schedule a free 30-minute introductory call with our experts to discuss your startup’s challenges and how we can help.</p>
                </li>
                <li className='mb-8 text-lg text-white sm:text-2xl'>
                    <h4 className='mb-2 text-lg sm:text-2xl text-off-white unbounded'>Get to Work</h4>
                    <p className='font-bold text-slate sm:text-xl'>After the call, we’ll create a custom action plan and start working with you to solve your most pressing tech challenges.</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default GettingStarted