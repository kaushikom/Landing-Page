import React from 'react'
import SolutionIcon from '../assets/solution.png'


const Card = ({url, title, content}) => {
  return(
<div className='px-6  w-[30ch] py-6 hover:border-yellow transition hover:scale-105 cursor-pointer border-2 rounded-lg border-light-grey bg-grey'>
        <img width="40" height="40" src={url}/>
        <h3 className='my-4 text-2xl font-bold text-white'>{title}</h3>
        <p className='text-lg text-off-white'>{content}</p>
    </div> 
  )
}

const Solution = () => {
  return (
    <section id='solution' className="px-4 py-12">
  {/* Solution Intro */}
  <div className="flex flex-col items-center sm:flex-row sm:items-start sm:w-3/4 sm:mx-auto">
    {/* Content */}
    <div className='order-2 sm:order-1 max-w-[90ch]'>
      <h1 className="mb-8 text-5xl text-white bebas sm:text-7xl">
      Affordable Tech Expertise, <br /> <span className='text-yellow'>No Equity</span> Needed 
      </h1>
      <h5 className="mb-6 text-lg font-semibold text-off-white sm:text-2xl">
       On-Demand Tech Co-founder Services to Help You Build, Scale, and Automate - Without Breaking the Bank 
      </h5>
      <p className="text-base font-semibold text-slate sm:text-xl">
       At <strong className='text-off-white'>Code Backward Lab</strong>, we offer flexible tech consulting services designed specifically for startups. Whether you need help with system architecture, AI integration, or digital marketing automation, we act as your tech co-founder—providing all the expertise, without asking for equity. 
      </p>
    </div>
    {/* Icon */}
    <div className="order-1 mb-8 sm:order-2 w-fit sm:mr-6 sm:mb-0">
      <img
      className='w-auto sm:h-[300px] h-[100px]'
        src={SolutionIcon}
        alt="solution"
      />
    </div>
    
  </div>
  {/* Solution Cards */}
  <div className='flex flex-wrap justify-center gap-8 my-16'>
    {/* Cards */}
<Card url="https://img.icons8.com/fluency/48/engineering.png" title="Tech Expertise" content="Get guidance on development, infrastructure, cloud deployment, and more." />
<Card url="https://img.icons8.com/fluency/48/artificial-intelligence--v1.png" title="AI & Automation" content="Discover how artificial intelligence and workflow automation can streamline your operations." />
<Card url="https://img.icons8.com/fluency/48/total-sales-1.png" title="Digital Marketing" content="Scale your brand with data-driven marketing strategies that drive results." />
<Card url="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-flexibility-agile-flaticons-flat-flat-icons.png" title="Flexibility" content="Choose from three pricing tiers that suit your needs and budget, without the long-term commitment or hefty salaries." />
  </div>
</section>
  )
}

export default Solution