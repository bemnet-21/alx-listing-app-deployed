import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/Vector.png'
import { FaSearch, FaUserAlt } from 'react-icons/fa'
import Options from './Options'


const Header = () => {
  return (
    <header className='min-w-screen '>
      <div className='flex items-center justify-center p-4 bg-[#34967C] text-white text-sm px-4  space-x-3 md:h-12 md:text-lg'>
        <div className='max-w-[200px] md:max-w-full'>Overseas trip? Get the latest information on travel guides</div>  
        <button className='bg-[#161117] rounded-full px-3 py-1'>More Info</button>
      </div>
      <div className='flex items-center h-16 my-3 px-4 border md:px-16'>
  
  <Image src={logo} alt='logo' className='hidden md:inline-block'/>

  {/* TABLET/DESKTOP VIEW SEARCH */}
  {/* Logic: Hidden on mobile, Flex on md+ */}
  <form className="hidden md:flex relative bg-white px-1 rounded-full border border-[#BEBEBE] w-full max-w-[340px] mx-auto items-center h-12 shadow-sm">

    {/* Location - 30% */}
    <div className="relative w-[30%] h-full border-r border-gray-200">
      <label htmlFor="dest" className="absolute top-1 left-4 text-[#161117] text-[10px] font-bold">Location</label>
      <input
        type="text"
        id="dest"
        placeholder="Where are you going?"
        className="w-full h-full pt-4 pl-4 rounded-l-full text-sm text-[#BEBEBE] focus:outline-none bg-transparent truncate"
      />
    </div>

    {/* Check In - 20% */}
    <div className="relative w-[20%] h-full border-r border-gray-200">
      <label htmlFor="check-in" className="absolute top-1 left-3 text-[#161117] text-[10px] font-bold">Check In</label>
      <input
        type="text"
        id="check-in"
        placeholder="Add date"
        className="w-full h-full pt-4 pl-3 text-sm text-[#BEBEBE] focus:outline-none bg-transparent truncate"
      />
    </div>

    {/* Check Out - 20% */}
    <div className="relative w-[20%] h-full border-r border-gray-200">
      <label htmlFor="check-out" className="absolute top-1 left-3 text-[#161117] text-[10px] font-bold">Check Out</label>
      <input
        type="text"
        id="check-out"
        placeholder="Add date"
        className="w-full h-full pt-4 pl-3 text-sm text-[#BEBEBE] focus:outline-none bg-transparent truncate"
      />
    </div>

    {/* People - 20% */}
    <div className="relative w-[20%] h-full">
      <label htmlFor="people" className="absolute top-1 left-3 text-[#161117] text-[10px] font-bold">People</label>
      <input
        type="text"
        id="people"
        placeholder="Add guest"
        className="w-full h-full pt-4 pl-3 text-sm text-[#BEBEBE] focus:outline-none bg-transparent truncate"
      />
    </div>

    {/* Search Button - 10% */}
    <div className="w-[10%] flex justify-center items-center pr-1">
      <button type="submit" className="bg-[#FFA800] text-white p-2 rounded-full hover:bg-amber-600 transition">
        <FaSearch className="text-sm" />
      </button>
    </div>

  </form>


  {/* MOBILE VIEW */}
  {/* Logic: Container mx-auto centers it. max-w-[318px] restricts width. */}
  <div className='md:hidden container mx-auto bg-white border border-[#BEBEBE] h-12 rounded-full max-w-[318px] shadow-md flex items-center justify-between pl-4 pr-1 sm:max-w-[440px]'>
    
    <div className="flex flex-col justify-center flex-1 overflow-hidden">
       {/* Simplified Mobile UI: Often better to just show "Start your search" text or simplified inputs */}
       <div className='flex items-center gap-2 text-sm'>
          <span className="font-semibold text-black whitespace-nowrap">Where to?</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 truncate">Anywhere • Any week</span>
       </div>
    </div>

    <button type="submit" className="bg-[#FFA800] text-white p-2.5 rounded-full shrink-0">
      <FaSearch className="text-sm" />
    </button>
  </div>


  <div className='hidden lg:flex gap-2 whitespace-nowrap ml-4'>
    <button className='bg-[#34967C] px-4 py-2 rounded-full text-white text-sm'>Sign in</button>
    <button className='border border-[#ECECEC] bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-50'>Sign up</button>
  </div>

  <FaUserAlt className='lg:hidden cursor-pointer text-2xl text-[#34967C] ml-auto sm:text-3xl md:text-4xl'/>

</div>
    </header>
  )
}

export default Header