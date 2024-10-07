import React from 'react'
import { FaQuoteRight, FaUser } from "react-icons/fa";
import { IconContext } from 'react-icons';
import Meraj from '../../assets/meraj.png'
import Nishant from '../../assets/nishant.jpeg'
import Dr from '../../assets/dr-poonam.jpeg'

const Card = ({content, author, designation, profileUrl = ''}) => {
    return(
        <div className='max-w-2xl p-4 px-6 mb-10 rounded-lg bg-light-grey'>
          <div className='flex flex-col gap-2 pb-4 border-b-2 border-dashed sm:flex-row sm:items-center sm:justify-between border-slate'>
            <div className='order-2 sm:order-1 sm:w-3/4'>
            <div className='my-2'>
              <IconContext.Provider value={{size:"50px", color:"#232323"}}>
              <FaQuoteRight/>
              </IconContext.Provider>
            </div>
            <p className='text-justify text-white text-md'>{content}</p>
            </div>
            <div className='flex items-center justify-center order-1 my-4 sm:order-2'>
              { profileUrl && ( <img src={profileUrl} alt="" className='w-auto max-h-[100px] rounded-full' />)}
              { !profileUrl &&  <IconContext.Provider value={{size:"80px"}}>
              <FaUser />
            </IconContext.Provider>}
           
            </div>
          </div>
          <h3 className='mt-4 text-lg text-white roboto'>{author}</h3>
          <h6 className='text-white roboto-light'>{designation}</h6>
        </div>
    )
}

const Testimonials = () => {
  return (
    <section id='testimonials' className='relative mt-20 flex flex-col px-6 sm:px-16 py-8 sm:justify-center gap-24 sm:flex-row sm:h-[250vh]'>
        <div className='h-full sm:w-2/5'>
          <div className='sm:sticky sm:top-8'>
            <h1 className='text-8xl sm:text-[128px] bebas sm:heading-size text-white'>WHAT OUR <span className='text-blue'>CLIENTS SAY</span></h1>
            <p className='mt-4 mb-8 uppercase text-off-white'>Don’t Just Take Our Word for It—Here’s What Startup Founders Are Saying </p>
          </div>
        </div>
        <div>
            <Card content={"We were struggling to build a scalable IT infrastructure as our user base grew, and our internal team couldn't keep up. Code Backward Lab helped us design and deploy a robust cloud-based system that scaled perfectly. In just 10 hours of consultation, we had a clear roadmap, and their expert guidance saved us thousands in potential mistakes."} author={"Mohammad Meraj Alam"} designation={"CEO, Karocharge, Brussels "} profileUrl={Meraj}/>
            <Card content={"Our digital marketing was lagging, and lead generation was stagnant. Code Backward Lab jumped in and within just 3 hours, provided a new digital marketing strategy focused on SEO and content marketing. The result? A 40% increase in web traffic and 20% more leads in just one month!"} author={"Nishant Sharma"} designation={"CEO, Metabriks Consulting, Melbourne "} profileUrl={Nishant} />
            <Card content={"We wanted to integrate AI into our processes but didn’t know where to start. Code Backward Lab’s experts helped us understand the best ways to use AI to automate customer support and streamline internal operations. The workflow automation they implemented saved us 30% in operational costs!" 
} author={"Abhishek Chachan"} designation={"CEO, Avasar app, Noida "} />
            <Card content={"Sajid, understood our requirements & accordingly prepared the plan, he knows what he says. He has the vast knowledge of technology as well as an experienced marketer, he built foundation of our social media marketing. I must say you must go for at least a consulting call with him once, he will put whole business audit in front of you in easy-to-understand format." 
} author={"Dr Poonam"} designation={"Director, MRRM hospital, New Delhi"} profileUrl={Dr} />
<Card content={"Working with the team at Code Backwards Lab was an absolute pleasure. They took the time to understand our brand and our goals, and created a website that truly represents us. The end result is a beautiful, fast-loading, and user-friendly site that we're proud to share with our customers. Thank you, Code Backwards Lab!"} author={"Z. Marafie"} designation={"CEO of SmartVerse Tech, Kuwait"} />
        </div>
    </section>
  )
}

export default Testimonials