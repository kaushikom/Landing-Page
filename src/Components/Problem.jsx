import React from 'react'
import QuestionIcon from '../assets/question-mark.png'
import {AnimatedButton} from './AnimatedButton/Animatedbutton'

const Card = ({url, title, content}) => {
  return(
<div className='px-6  w-[30ch] py-6 hover:border-blue transition hover:scale-105 cursor-pointer border-2 rounded-lg border-light-grey bg-grey'>
        <img width="40" height="40" src={url}/>
        <h3 className='my-4 text-2xl font-bold text-white'>{title}</h3>
        <p className='text-lg text-off-white'>{content}</p>
    </div> 
  )
}

const Problem = () => {
  return (
    <section className="py-12">
  {/* Problem Intro */}
  <div className="flex flex-col items-center sm:flex-row sm:items-start sm:w-3/4 sm:mx-auto">
    {/* Icon */}
    <div className="mb-4 sm:mr-6 sm:mb-0">
      <img
      className='w-auto sm:h-[300px] h-[100px]'
        src={QuestionIcon}
        alt="question mark"
      />
    </div>
    {/* Content */}
    <div className='max-w-[90ch]'>
      <h1 className="mb-8 text-white bebas sm:text-8xl">
        What's holding <span className='text-blue'>your startup</span> back?
      </h1>
      <h5 className="mb-6 text-lg font-semibold text-off-white sm:text-2xl">
        Finding the Right Tech Partner Shouldn’t Mean Sacrificing Ownership or Overspending
      </h5>
      <p className="text-base font-semibold text-slate sm:text-xl">
        As a startup founder, you’re wearing many hats—product development, sales, marketing, and everything in between. However, without strong technical leadership, scaling your business is a constant uphill battle. Many founders face these challenges:
      </p>
    </div>
  </div>
  {/* Problem Cards */}
  <div className='flex flex-wrap justify-center gap-8 my-16'>
    {/* Cards */}
<Card url="https://img.icons8.com/ultraviolet/40/expensive-2--v1.png" title="Costly Salaries" content="Hiring a full-time CTO can strain your early-stage budget." />
<Card url="https://img.icons8.com/emoji/48/snail-emoji.png" title="Slow Growth" content="Without the right tech strategy, it’s hard to keep up with competitors." />
<Card url="https://img.icons8.com/external-febrian-hidayat-fill-lineal-febrian-hidayat/64/external-08-finance-and-economic-febrian-hidayat-fill-lineal-febrian-hidayat.png" title="Equity Loss" content="Bringing in a tech co-founder often means giving away a significant share of your company." />
<Card url="https://img.icons8.com/emoji/48/snail-emoji.png" title="Slow Growth" content="Without the right tech strategy, it’s hard to keep up with competitors." />
  </div>
</section>
  )
}

export default Problem