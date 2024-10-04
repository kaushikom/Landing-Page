import React from 'react'
import CustomDatePicker from './CustomDatePicker'
import StyledSelect from './StyledSelect'
import { ReverseAnimatedButton } from './AnimatedButton/Animatedbutton'
const Contact = () => {
  return (
    <section className='px-6'>
        <h1 className='text-4xl text-white text-start sm:text-center unbounded sm:text-7xl'>Book Your <span className='text-blue'>Free</span><br />Introductory Call Now </h1>
        <h3 className='my-8 text-lg text-center text-off-white sm:text-3xl'>Don’t Wait—Transform Your Startup with Expert Tech Support Today </h3>
        <p className='text-slate max-w-[95ch] mx-auto text-center text-lg roboto'>Fill out the form below to book your free 30-minute introductory call. Learn how <strong>Code Backward Lab</strong> can help you scale your startup with expert tech guidance—without sacrificing equity or overspending. Our team is ready to help you unlock your startup’s full potential. </p>
        <div className='flex flex-wrap justify-between gap-8 mx-auto my-8 md:w-3/5'>
            <input required placeholder='Name' type="text" name='name' className='px-4 py-2 text-2xl text-white bg-black border-2 outline-none sm:text-3xl placeholder:text-light-grey sora border-light-grey caret-blue focus:border-blue' />
            <input required placeholder='Email' type="text" name='email' className='px-4 py-2 text-2xl text-white bg-black border-2 outline-none sm:text-3xl placeholder:text-light-grey sora border-light-grey caret-blue focus:border-blue' />
        </div>
        <div className='flex flex-wrap justify-between gap-8 mx-auto my-8 md:w-3/5'>
            <input placeholder='Company Name' type="text" name='company-name' className='px-4 py-2 text-2xl text-white bg-black border-2 outline-none sm:text-3xl placeholder:text-light-grey sora border-light-grey caret-blue focus:border-blue' />
            <CustomDatePicker />
        </div>
        <div className='flex flex-wrap justify-between gap-8 mx-auto my-8 md:w-3/5'>
            <StyledSelect />
        </div>
        <div className='flex flex-wrap justify-between gap-8 mx-auto my-8 md:w-3/5'>
            <textarea placeholder='Brief description of your startup' name="" id="" className='w-full px-4 py-2 sm:text-3xl text-2xl text-white h-[150px] bg-black border-2 outline-none placeholder:text-light-grey sora border-light-grey caret-blue focus:border-blue'></textarea>
        </div>
        <div className='flex flex-wrap justify-center gap-8 mx-auto my-8 md:w-3/5'>
    <ReverseAnimatedButton content='Submit' />
        </div>
    </section>
  )
}

export default Contact