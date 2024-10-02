import React from 'react'
import { FaQuoteRight, FaUser } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Card = ({content, author, designation, profileUrl = ''}) => {
    return(
        <div className='max-w-2xl p-4 px-6 mb-10 rounded-lg bg-light-grey'>
          <div className='flex items-center justify-between gap-2 pb-4 border-b-2 border-dashed border-slate'>
            <div className='w-3/4'>
            <div>
              <IconContext.Provider value={{size:"50px", color:"#232323"}}>
              <FaQuoteRight/>
              </IconContext.Provider>
            </div>
            <p className='text-justify text-off-white text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus temporibus omnis illum veniam fugit nulla expedita consequatur asperiores aperiam tenetur eum facilis laboriosam, porro, dolor ipsum magni cupiditate quia at in, obcaecati laudantium molestias nostrum vitae. Consectetur expedita unde blanditiis nemo delectus numquam, possimus optio repellat tempore quis? Quos.</p>
            </div>
            <div>
            <IconContext.Provider value={{size:"100px"}}>
              <FaUser />
            </IconContext.Provider>
            </div>
          </div>
          <h3 className='mt-4 text-lg text-white roboto'>Author Name</h3>
          <h6 className='text-white roboto-light'>Designation</h6>
        </div>
    )
}

const Testimonials = () => {
  return (
    <section className='flex sm:justify-between flex-col sm:flex-row px-16 sm:h-[200vh] relative py-8'>
        <div className='h-full sm:w-2/5'>
          <div className='sm:sticky sm:top-8'>
            <h1 className='text-[128px] bebas heading-size text-white'>WHAT OUR <span className='text-blue'>CLIENTS SAY</span></h1>
            <p className='mt-4 mb-8 text-off-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid excepturi aperiam numquam optio saepe aliquam tempora tempore tenetur, magni natus perferendis voluptates maiores distinctio voluptas maxime modi sapiente. Enim!</p>
          </div>
        </div>
        <div>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </section>
  )
}
// const Testimonials = () => {
//   return (
//     <section className='flex px-8'>
//         <div className='sticky top-0 w-2/5 text-white bebas heading-size'>
//             <h1 className='text-[128px]'>WHAT OUR <span className='text-blue'>CLIENTS SAY</span></h1>
//         </div>
//         <div className='w-3/5 overflow-auto'>
//             <Card />
//             <Card />
//             <Card />
//             <Card />
//         </div>
//     </section>
//   );
// };


export default Testimonials