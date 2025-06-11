import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#222222]'>
      <div className='bg-[#34967C] h-6'></div>
      <div className='flex gap-24 p-10'>

        <div>
          <Image src='/assets/vector white.png' alt='logo' width={58.73} height={30.6} className='mb-4'/>
          <p className='text-[#CACACA] w-xl'>
            ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
          </p>
        </div>

        <div className='flex justify-between w-2xl px-10'>
          <div>
            <h2 className='text-[#CACACA] mb-4 font-medium text-2xl'>Explore</h2>
            <ul className='text-[#CACACA] text-sm'>
              <li className='mb-2'>Apartments in Dubai</li>
              <li className='mb-2'>Hotels in New York</li>
              <li className='mb-2'>Villa in Spain</li>
              <li className='mb-2'>Mansion in Indonesia</li>
            </ul>
          </div>
          <div>
            <h2 className='text-[#CACACA] mb-4 font-medium text-2xl'>Company</h2>
            <ul className='text-[#CACACA] text-sm'>
              <li className='mb-2'>About us</li>
              <li className='mb-2'>Blog</li>
              <li className='mb-2'>Career</li>
              <li className='mb-2'>Customers</li>
              <li className='mb-2'>Brand</li>
            </ul>
          </div>
          <div>
            <h2 className='text-[#CACACA] mb-4 font-medium text-2xl'>Help</h2>
            <ul className='text-[#CACACA] text-sm'>
              <li className='mb-2'>Support</li>
              <li className='mb-2'>Cancel booking</li>
              <li className='mb-2'>Refunds Process</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-200 mx-10 mt-10" />
      <div className='flex py-3 text-[#CACACA] gap-83 pb-6'>
        <div className='px-10  text-sm'>Some hotel requires you to cancel more than 24 hours before check-in. Details <span className='text-[#34967C]'>here</span></div>
        <div className=' text-sm w-sm flex justify-between'>
          <div>Terms of Service</div>
          <div>Policy service</div>
          <div>Cookies Policy</div>
          <div>Partners</div>
        </div>
      </div>

    </footer>
  )
}

export default Footer