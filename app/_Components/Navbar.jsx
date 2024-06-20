import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/translogo.png'
function Nav() {
  return (
    <>
    <header className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
         <Image className='bg-black rounded-lg' src={Logo} alt="LeRN" height={150} width={150} />
        </a>
      </div>


    <UserButton/>
    </div>
  </div>
</header>
    
    </>
  )
}

export default Nav