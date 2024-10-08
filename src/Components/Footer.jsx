// import React from 'react'
// import Logo from '../assets/logo-lg.png'
// import { AiOutlineArrowRight } from 'react-icons/ai';

// const Footer = () => {
//   return (
//     <footer className='w-full text-white sm:flex'>
//         {/* Left */}
//         <div className='border-2 border-light-grey sm:w-1/2'>
//             <div className='p-4 border-2 border-light-grey'>
//                 <h3 className='text-center'>Section</h3>
//             </div>
//             <div className='p-4 border-2 border-light-grey'>
//                 <div>
//                     <h3>Heading</h3>
//                     <h4>Sub-Heading</h4>
//                     <p>Address</p>
//                 </div>
//                 <div>
//                      <h3>Heading</h3>
//                     <h4>Sub-Heading</h4>
//                     <p>Address</p>
//                 </div>

//             </div>
//             <div className='p-4 border-2 border-light-grey'>
//             <img src={Logo} alt="Code Backwards Lab logo" />
//             </div>
//         </div>
//         {/* Right */}
//         <div className='flex flex-col h-[500px] border-2 border-l-0 border-light-grey sm:w-1/2'>
//             <div className='flex-grow border-2 sm:px-12 border-light-grey sm:py-8'>
//                 <h1 className='my-4 uppercase unbounded sm:text-5xl'>Get the <span className='text-blue'>latest</span> news about CODE LABS</h1>
//                 <h4 className='my-4 font-semibold text-off-white roboto sm:text-xl'>Join the mailing list</h4>
//             <div className='flex border-2 border-light-grey'>
//   <input 
//     required 
//     placeholder='name@email.com' 
//     type="text" 
//     name='email' 
//     className='w-full px-4 py-2 text-lg text-white bg-black outline-none sm:text-xl placeholder:text-light-grey sora caret-blue focus:border-blue' 
//   />
//   <div className='my-2 mr-2'>
//     <button className='p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none'>
//       <AiOutlineArrowRight size={24} />
//     </button>
//   </div>
// </div>
//             </div>
//             {/* Links */}
//             <div className='flex border-2 border-t-0 border-light-grey'>
//                 <div className='w-1/4 border-[1px] border-light-grey text-center inter py-4 sm:text-2xl'><a href="">LINKEDIN</a></div>
//                 <div className='w-1/4 border-[1px] border-light-grey text-center inter py-4 sm:text-2xl'><a href="">INSTAGRAM</a></div>
//                 <div className='w-1/4 border-[1px] border-light-grey text-center inter py-4 sm:text-2xl'><a href="">TWITTER</a></div>
//                 <div className='w-1/4 border-[1px] border-light-grey text-center inter py-4 sm:text-2xl'><a href="">FACEBOOK</a></div>
//             </div>
//         </div>
//     </footer>
//   )
// }

// export default Footer

import React from 'react'
import Logo from '../assets/logo-lg.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdOutlineMailOutline, MdOutlineLocalPhone } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className='w-full text-white sm:flex'>
      {/* Left */}
      <div className='border-2 border-light-grey sm:w-1/2'>
        <div className='p-8 border-2 border-light-grey'>
          <h3 className='sm:text-lg sora'>Who we are?</h3>
          <p className='mt-4 text-sm text-off-white sora'>At Code Backward Lab, we make your growth journey simpler, faster, and more efficient. Whether you're looking to optimize your digital marketing, leverage the power of AI, or build scalable IT infrastructure, we're here to guide you at every step – no equity needed, just expert consulting on your terms.</p>
        </div>
        <div className='px-4 border-2 sm:flex border-light-grey'>
          <div className='py-2 mb-4 sm:px-4 sm:w-1/2'>
            <h3 className='mb-2 text-lg font-bold sora text-off-white'>Help & Support</h3>
        <h4 className='flex items-center gap-2 my-2 text-off-white'>
  <MdOutlineMailOutline size={24} />
  <a href="mailto:help@codebackward.com" className='text-off-white'>
    help@codebackward.com
  </a>
</h4>

          <p className='flex items-center gap-2 my-2 text-off-white'>
  <MdOutlineLocalPhone size={24} /> 
  <a href="tel:+919910674791">+91 9910674791</a>
</p>
          </div>
          <div className='flex flex-col gap-2 py-2 mb-4 sm:border-l-2 sm:px-4 border-light-grey text-off-white'>
            <h3 className='text-lg font-bold sora'>Important Links</h3>
            <a className='hover:text-blue sora' href="#testimonials">Testimonials</a>
            <a className='hover:text-blue sora' href="#solution">Our Solution</a>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center p-4 border-2 border-light-grey'>
          <img src={Logo} alt="Code Backwards Lab logo" className='h-auto max-w-full' />
          <h6 className='flex gap-1 mb-4 text-off-white sm:items-center'><RiMoneyDollarCircleLine size={24} /><span>Hire a Tech Co-founder Without Breaking the Bank.</span></h6>
        </div>
      </div>
      {/* Right */}
      <div className='flex flex-col border-2 border-l-0 border-light-grey sm:w-1/2'>
        <div className='flex flex-col flex-grow px-4 pb-6 border-2 justify-evenly sm:px-12 border-light-grey sm:py-8'>
          <h1 className='my-4 uppercase unbounded sm:text-5xl'>Get the <span className='text-blue'>latest</span> news about CODE LABS</h1>
          <h4 className='my-4 font-semibold text-off-white roboto sm:text-xl sora'>Join the mailing list</h4>
          <div className='flex border-2 border-light-grey'>
            <input 
              required 
              placeholder='name@email.com' 
              type="text" 
              name='email' 
              className='w-full px-4 py-2 text-lg text-white bg-black outline-none sm:text-xl placeholder:text-light-grey sora caret-blue focus:border-blue' 
            />
            <div className='my-2 mr-2'>
              <button className='p-2 text-white bg-blue-500 rounded-full hover:bg-light-grey hover:bg-blue-600 focus:outline-none'>
                <AiOutlineArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
        {/* Links */}
        <div className='flex flex-wrap border-2 border-t-0 border-light-grey'>
          {['LINKEDIN', 'INSTAGRAM', 'TWITTER', 'FACEBOOK'].map((link) => (
            <div key={link} className='w-1/2 sm:w-1/4 border-[1px] border-light-grey text-center inter py-4 sm:text-lg'>
              <a href="">{link}</a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer