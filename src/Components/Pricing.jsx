import React from 'react'

const PricingComponent = () => {
  return (
    <section className='px-6'>
      <h3 className='text-5xl text-white text-start sm:text-center unbounded-bold'>Choose a plan that's <br /> <span className='text-blue'>right</span> for you</h3>
      {/* Cards */}
      <div className='flex flex-col justify-center gap-6 border-2 md:flex-row mt-14'>
        {/* Card */}
        <div className='max-w-80'>
          {/* Upper section */}
          <div className='flex flex-col items-center gap-2 py-4 bg-grey'>
            <h3 className='mt-4 text-3xl text-white roboto-bold'>Tier 1</h3>
            <h6 className='mb-4 text-lg font-bold text-off-white unbounded'>3 Consultation hours</h6>
            <h6 className='text-6xl font-black text-white'>$299</h6>
            <button className='px-8 py-2 my-4 mb-8 font-semibold text-black uppercase bg-white border-2 hover:border-white hover:text-white hover:bg-black roboto'>Get Started</button>
          </div>
          {/* Lower Section */}
          <div className='px-4'>
            <h6 className='mt-8 font-bold text-slate'>Key Features:</h6>
            <ul className='list-disc'>
              <li className='my-4 text-off-white sora'><strong>IT Consulting:</strong> Quick audits of your existing infrastructure, advice on tech stack choices, and recommendations for quick fixes.</li>
              <li className='my-4 text-off-white sora'><strong>Digital Marketing:</strong> Review of current marketing strategies and recommendations for immediate improvements, such as SEO tweaks and social media tips.</li>
              <li className='my-4 text-off-white sora'><strong>AI Intergration</strong> Preliminary advice on the use of AI, such as identifying opportunities for automation or AI-driven customer support.</li>
              <li className='my-4 text-off-white sora'><strong>Workflow Automation:</strong> Basic guidance on how to automate repetitive tasks and tools to consider.</li>
            </ul>
          </div>
        </div>
        {/* Card */}
        <div className='max-w-80'>
          {/* Upper section */}
          <div className='flex flex-col items-center gap-2 py-4 bg-blue'>
            <button className='px-6 py-2 bg-[#152346] border-off-white border-[1px] rounded-full bg-light-grey text-off-white'>Popular</button>
            <h3 className='mt-4 text-3xl text-white roboto-bold'>Tier 2</h3>
            <h6 className='mb-4 text-lg font-bold text-off-white unbounded'>5 Consultation hours</h6>
            <h6 className='text-6xl font-black text-white'>$499</h6>
            <button className='px-8 py-2 my-4 mb-8 font-semibold text-black uppercase bg-white border-2 border-white hover:border-white hover:text-white hover:bg-black roboto'>Get Started</button>
          </div>
          {/* Lower Section */}
          <div className='px-4'>
            <h6 className='mt-8 font-bold text-slate'>Key Features:</h6>
            <ul className='list-disc'>
              <li className='my-4 text-off-white sora'><strong>IT Consulting:</strong> Deeper technical evaluation, system architecture recommendations, cloud migration plans, and security assessments.</li>
              <li className='my-4 text-off-white sora'><strong>Digital Marketing:</strong> Comprehensive digital marketing strategy, detailed SEO audits, social media planning, content strategy development, and performance tracking tools setup.</li>
              <li className='my-4 text-off-white sora'><strong>AI Intergration</strong> Guidance on selecting AI tools, basic AI model integrations, and automation of internal processes.</li>
              <li className='my-4 text-off-white sora'><strong>Workflow Automation:</strong> Workflow process mapping and implementation of automation tools.</li>
            </ul>
          </div>
        </div>
        {/* Card */}
        <div className='max-w-80'>
          {/* Upper section */}
          <div className='flex flex-col items-center gap-2 py-4 bg-[#ffdb58]'>
            <h3 className='mt-4 text-3xl text-black roboto-bold'>Tier 3</h3>
            <h6 className='mb-4 text-lg font-bold text-light-grey unbounded'>10 Consultation hours</h6>
            <h6 className='text-6xl font-black text-grey'>$799</h6>
            <button className='px-8 py-2 my-4 mb-8 font-semibold text-black uppercase bg-white border-2 border-white hover:border-white hover:text-white hover:bg-black roboto'>Get Started</button>
          </div>
          {/* Lower Section */}
          <div className='px-4'>
            <h6 className='mt-8 font-bold text-slate'>Key Features:</h6>
            <ul className='list-disc'>
              <li className='my-4 text-off-white sora'><strong>IT Consulting:</strong> Full-scale system architecture design, deployment roadmap, detailed cloud infrastructure setup, DevOps integration, and data security strategies.</li>
              <li className='my-4 text-off-white sora'><strong>Digital Marketing:</strong> In-depth multi-channel campaign strategy, conversion rate optimization (CRO) analysis, marketing automation, email drip campaigns, and customer segmentation strategies.</li>
              <li className='my-4 text-off-white sora'><strong>AI Intergration</strong> Advanced AI model deployment, data pipeline setup, predictive analytics tools, and AI-driven customer service automations</li>
              <li className='my-4 text-off-white sora'><strong>Workflow Automation:</strong> Full workflow automation design and implementation, tools integration (e.g., Zapier, Power Automate), and employee training for the tools.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PricingComponent


// import React from 'react'

// const PricingComponent = () => {
//   return (
//     <section className="px-4 py-8">
//       <h3 className="text-3xl text-center text-white md:text-5xl unbounded-bold">Choose a plan that's <br /> <span className='text-blue'>right</span> for you</h3>
      
//       {/* Cards */}
//       <div className="flex flex-col justify-center gap-6 mt-10 border-2 md:flex-row md:mt-14">
//         {/* Card */}
//         <div className="w-full md:w-1/3 max-w-80">
//           {/* Upper section */}
//           <div className="flex flex-col items-center gap-2 py-4 bg-grey">
//             <h3 className="mt-4 text-2xl text-white md:text-3xl roboto-bold">Tier 1</h3>
//             <h6 className="mb-4 text-base font-bold md:text-lg text-off-white unbounded">3 Consultation hours</h6>
//             <h6 className="text-4xl font-black text-white md:text-6xl">$299</h6>
//             <button className="px-6 py-2 my-4 mb-8 font-semibold text-black uppercase bg-white border-2 md:px-8 md:py-2 hover:border-white hover:text-white hover:bg-black roboto">Get Started</button>
//           </div>
//           {/* Lower Section */}
//           <div className="px-4">
//             <h6 className="mt-8 font-bold text-slate">Key Features:</h6>
//             <ul className="list-disc">
//               <li className="my-4 text-off-white sora"><strong>IT Consulting:</strong> Quick audits of your existing infrastructure, advice on tech stack choices, and recommendations for quick fixes.</li>
//               <li className="my-4 text-off-white sora"><strong>Digital Marketing:</strong> Review of current marketing strategies and recommendations for immediate improvements, such as SEO tweaks and social media tips.</li>
//               <li className="my-4 text-off-white sora"><strong>AI Integration:</strong> Preliminary advice on the use of AI, such as identifying opportunities for automation or AI-driven customer support.</li>
//               <li className="my-4 text-off-white sora"><strong>Workflow Automation:</strong> Basic guidance on how to automate repetitive tasks and tools to consider.</li>
//             </ul>
//           </div>
//         </div>
        
//         {/* Card */}
//         <div className="w-full md:w-1/3 max-w-80">
//           {/* Upper section */}
//           <div className="flex flex-col items-center gap-2 py-4 bg-blue">
//             <button className="px-4 py-1 bg-[#152346] border-off-white border-[1px] rounded-full text-off-white">Popular</button>
//             <h3 className="mt-4 text-2xl text-white md:text-3xl roboto-bold">Tier 2</h3>
//             <h6 className="mb-4 text-base font-bold md:text-lg text-off-white unbounded">5 Consultation hours</h6>
//             <h6 className="text-4xl font-black text-white md:text-6xl">$499</h6>
//             <button className="px-6 py-2 my-4 mb-8 font-semibold text-black uppercase bg-white border-2 md:px-8 md:py-2 hover:border-white hover:text-white hover:bg-black roboto">Get Started</button>
//           </div>
//           {/* Lower Section */}
//           <div className="px-4">
//             <h6 className="mt-8 font-bold text-slate">Key Features:</h6>
//             <ul className="list-disc">
//               <li className="my-4 text-off-white sora"><strong>IT Consulting:</strong> Deeper technical evaluation, system architecture recommendations, cloud migration plans, and security assessments.</li>
//               <li className="my-4 text-off-white sora"><strong>Digital Marketing:</strong> Comprehensive digital marketing strategy, detailed SEO audits, social media planning, and content strategy development.</li>
//               <li className="my-4 text-off-white sora"><strong>AI Integration:</strong> Guidance on selecting AI tools, basic AI model integrations, and automation of internal processes.</li>
//               <li className="my-4 text-off-white sora"><strong>Workflow Automation:</strong> Workflow process mapping and implementation of automation tools.</li>
//             </ul>
//           </div>
//         </div>
        
//         {/* Card */}
//         <div className="w-full md:w-1/3 max-w-80">
//           {/* Upper section */}
//           <div className="flex flex-col items-center gap-2 py-4 bg-[#007232]">
//             <h3 className="mt-4 text-2xl text-white md:text-3xl roboto-bold">Tier 3</h3>
//             <h6 className="mb-4 text-base font-bold md:text-lg text-off-white unbounded">10 Consultation hours</h6>
//             <h6 className="text-4xl font-black text-white md:text-6xl">$799</h6>
//             <button className="px-6 py-2 my-4 mb-8 font-semibold text-black uppercase bg-white border-2 md:px-8 md:py-2 hover:border-white hover:text-white hover:bg-black roboto">Get Started</button>
//           </div>
//           {/* Lower Section */}
//           <div className="px-4">
//             <h6 className="mt-8 font-bold text-slate">Key Features:</h6>
//             <ul className="list-disc">
//               <li className="my-4 text-off-white sora"><strong>IT Consulting:</strong> Full-scale system architecture design, deployment roadmap, and detailed cloud infrastructure setup.</li>
//               <li className="my-4 text-off-white sora"><strong>Digital Marketing:</strong> In-depth multi-channel campaign strategy, conversion rate optimization (CRO) analysis, and marketing automation.</li>
//               <li className="my-4 text-off-white sora"><strong>AI Integration:</strong> Advanced AI model deployment, data pipeline setup, and predictive analytics tools.</li>
//               <li className="my-4 text-off-white sora"><strong>Workflow Automation:</strong> Full workflow automation design and implementation, tools integration, and employee training.</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PricingComponent
