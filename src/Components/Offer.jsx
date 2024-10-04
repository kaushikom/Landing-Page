import React from 'react'
import {ReverseAnimatedButton} from '../Components/AnimatedButton/Animatedbutton.jsx'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const Card = ({url, title, content}) => {
  return(
<div className='px-6 w-[40ch] py-6 border-2 rounded-lg border-light-grey bg-grey'>
        <img width="40" height="40" src={url}/>
        <h3 className='my-4 text-2xl font-bold text-white'>{title}</h3>
        <p className='text-lg text-off-white'>{content}</p>
    </div> 
  )
}
const Offer = () => {
  return (
    <section className='flex flex-col px-6 my-40 sm:grid sm:grid-cols-3 blue-blur'>
<div className='flex flex-col items-center order-2 gap-12 mb-12 sm:order-1'>
    <ScrollAnimation animateIn="zoomIn">
  <Card url="https://img.icons8.com/fluency/48/popular-man.png" title="IT Consulting" content="From choosing the right tech stack to designing scalable cloud infrastructure, we offer end-to-end IT consulting tailored to your startup’s specific needs. Whether it’s a one-time audit or ongoing support, we’ve got you covered. " />
</ScrollAnimation>
    <ScrollAnimation animateIn="zoomIn">
    <Card url="https://img.icons8.com/fluency/48/total-sales-1.png" title="Digital Marketing" content="Grow your brand and reach more customers with strategic, data-driven digital marketing solutions. From SEO optimization to social media strategy, we help you get measurable results." />
    </ScrollAnimation>
</div>
<div className='flex flex-col justify-center order-1 sm:order-2'>
    <h4 className='text-white text-8xl sm:text-9xl bebas'>What We <span className='text-blue'>Offer</span></h4>
    <h6 className='my-4 mb-6 uppercase text-md text-off-white inter'>Comprehensive Services Tailored for Your Startup: <br /> We Provide Expertise Across Four Key Verticals to Drive Your Startup’s Growth </h6>
    <div className='mb-6'>
<ReverseAnimatedButton />
    </div>
</div>
<div className='flex flex-col items-center order-3 gap-12'>
    <ScrollAnimation animateIn="zoomIn">
    <Card url="https://img.icons8.com/fluency/48/bot.png" title="AI Integration" content="Harness the power of artificial intelligence. Our consultants help you implement AI tools to automate repetitive tasks, improve decision-making, and gain a competitive edge." />
    </ScrollAnimation>
    <ScrollAnimation animateIn="zoomIn">
    <Card url="https://img.icons8.com/arcade/64/settings-3.png" title="Workflow Automation" content="Streamline your internal operations with smart automation solutions. We’ll help you identify bottlenecks and set up tools that save time, reduce errors, and improve efficiency." />
    </ScrollAnimation>
</div>
    </section>
  )
}

export default Offer