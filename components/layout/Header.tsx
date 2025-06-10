import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/Vector.png'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className='bg-[#34967C] text-white flex justify-center items-center gap-6 h-10'>
        <div>Overseas trip? Get the latest information on travel guides</div>  
        <button className=' rounded-3xl px-3 py-0.5 bg-[#161117]'>More Info</button>
      </div>
      <div className='flex justify-between items-center h-16 my-3'>
        <Image src={logo} alt='logo'/>
        <form className='relative'>
          <label htmlFor='dest' className='absolute top-1 left-5 text-[#161117]'>Location</label>
          <input type='text' id='dest' placeholder='Search for destination' className='border rounded-4xl text-[#BEBEBE] pt-8 pb-1 px-5 w-[680px] focus:outline-none'/>
          <label htmlFor='check-in' className='absolute top-1 left-62 text-[#161117]'>Check In</label>
          <input type='text' id='check-in' placeholder='Add date' className=' text-[#BEBEBE] border-l absolute left-60 top-3 pl-1.5 pt-5 w-30 focus:outline-none'/>
          <label htmlFor='check-in' className='absolute top-1 left-92 text-[#161117]'>Check Out</label>
          <input type='text' id='check-in' placeholder='Add date' className=' text-[#BEBEBE] border-l absolute left-90 top-3 pl-1.5 pt-5 w-30 focus:outline-none'/>
          <label htmlFor='check-in' className='absolute top-1 left-122 text-[#161117]'>People</label>
          <input type='text' id='check-in' placeholder='Add guest' className='placeholder-[#BEBEBE] border-l absolute left-120 top-3 pl-1.5 pt-5 w-30 text-[#BEBEBE] focus:outline-none'/>
          
          <div className="flex items-center justify-center bg-[#FFA800] w-13 h-13 rounded-4xl absolute left-150 top-1.25">
            <FaSearch className="text-white text-4xl font-light" />
          </div>

          

        </form>
        <div className='flex gap-2'>
          <button className='bg-[#34967C] p-2 rounded-4xl'>Sign in</button>
          <button className='border border-[#ECECEC] bg-white text-black p-2 rounded-4xl mr-15'>Sign up</button>
        </div>
      </div>
    </header>
  )
}

export default Header