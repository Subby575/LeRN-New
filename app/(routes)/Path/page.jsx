"use client"
import React from 'react'
import { BentoGridThirdDemo } from '@/app/(routes)/Path/_components/Bento'

const page = () => {
  return (
   <>
{/* <Boxes/> */}
   <div>
 
   
   <section className="text-gray-900 z-30 body-font ">
  <div className="container  py-24">
    <div className=" w-full  mb-20">
      <h1 className="sm:text-5xl ml-20 inline-block text-5xl font-medium title-font text-gray-900 lg:w-3/4 lg:mb-0 mb-4">Skills of Entrepreneurship</h1>
      <p className=" pt-4 lg:w-2/3 ml-20 leading-relaxed text-base text-gray-700">Master essential skills like leadership, strategic thinking, and communication to drive entrepreneurial success.</p>
    </div>
    <div>
      <div className=' mx-20 py-12 -mt-20 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-800 '>

    <BentoGridThirdDemo/>

      </div>
    {/* <WobbleCardDemo /> */}
    </div>
   </div>
   </section>
   <div className='z-10'>

   {/* <BackgroundBeams/> */}
   </div>
 
   </div>
   </>
  )
}

export default page