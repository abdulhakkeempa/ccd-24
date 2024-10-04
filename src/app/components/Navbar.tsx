"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sm:top-0 z-10 flex items-center justify-between flex-wrap p-8 mx-auto bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 shadow-lg">
      <div className="flex items-center flex-shrink-0 text-gray-900 mr-6">
        <Link className="font-semibold text-2xl tracking-tight" href="/">
            <Image src="/images/CCD Logo - Left Aligned - Transparent.svg" alt="logo" width={150} height={24}/>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-300 hover:text-gray-900 hover:border-gray-400">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="md:flex md:flex-row md:items-center text-base lg:flex-grow lg:flex lg:justify-end lg:space-x-7">
          <Link href="/speakers" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">
              Speakers
          </Link>
         <Link href="/agenda" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900">
              Agenda
          </Link> 
          <Link href="/partners" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4"> 
              Partners
          </Link>

          <div className='mt-4 md:mt-0'>
          
            <button className="google-blue text-white font-medium py-2 px-4 rounded">
              <Link href="https://konfhub.com/google-cloud-community-day-kochi-2024">Register Now</Link> 
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

}
