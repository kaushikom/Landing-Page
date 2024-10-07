import React from 'react'
import CountUp from 'react-countup';

const Card = ({url, title, content}) => {
  return(
<div className='px-6 mx-auto w-[30ch] py-6 hover:border-blue transition hover:scale-105 cursor-pointer border-2 rounded-lg border-light-grey bg-grey'>
        <img width="40" height="40" src={url}/>
        <h3 className='my-4 text-2xl font-bold text-white'>{title}</h3>
        <p className='text-lg text-off-white'>{content}</p>
    </div> 
  )
}
const ChooseUs = () => {
  return (
    <section className='flex flex-col justify-center px-4 py-12 blue-blur sm:flex-row'>
{/* Content */}
<div className='max-w-[90ch]'>
    <h2 className='text-4xl text-white sm:text-6xl unbounded'>The Code Backward Lab Advantage </h2>
    <h5 className='my-12 text-xl sm:text-2xl text-off-white inter'>Startups Trust Us to Deliver Results Without Sacrificing Ownership or Overspending </h5>
    <p className='text-md sora sm:text-lg font-semibold text-off-white my-4 max-w-[70ch]'>When you work with us, you don’t just get technical advice—you get a true partner invested in your success. Here’s why startups choose us: </p>
    <div className='flex gap-12 mt-20 mb-8 sm:gap-24'>
        <div className='text-off-white'><strong className='text-6xl text-white'><CountUp  end={800} enableScrollSpy />+</strong><br />Projects Completed</div>
        <div className='text-off-white'><strong className='text-6xl text-white'><CountUp  end={300} enableScrollSpy />+</strong><br />Happy Clients</div>
        
    </div>
</div>
{/* Cards */}
<div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
    <Card url="https://img.icons8.com/external-flaticons-flat-flat-icons/50/external-ownership-gig-economy-flaticons-flat-flat-icons.png" title="Keep 100% Ownership" content=" No equity or shares required. Your startup stays fully yours." />
    <Card url="https://img.icons8.com/color/48/cash.png" title="Affordable Pricing" content="Pay for only what you need, with flexible hourly tiers that fit any budget" />
    <Card url="https://img.icons8.com/fluency/48/development-skill.png" title="Expert Guidance" content="Our consultants bring years of experience working with startups and solving complex tech challenges." />
    <Card url="https://img.icons8.com/fluency/48/checked.png" title="Proven Success" content="From AI integration to workflow automation, we’ve helped startups from all industries grow and scale. " />
</div>
    </section>
  )
}

export default ChooseUs