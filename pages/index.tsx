import React from 'react'
import Layout from '@/components/layout/Layout'
import Pill from '@/components/common/Pill'
import Image from 'next/image'
const index: React.FC = () => {
  return (
    <section className='px-16 relative'>
      <Image src='/assets/image 1.png' alt='background image' width={1608} height={481} className='rounded-3xl' priority/>
      <div className='absolute text-7xl top-20.5 left-92.75 w-2xl h-96 text-center'>Find Your Favorite Place Here</div>
      <div className='absolute top-58 left-125 text-center'>The best prices for over 2 million properties worldwide</div>

      <div className='border flex justify-between mt-4'>
        <div className='flex border  w-2xl justify-between'>
          <Pill label='All'/>
          <Pill label='Top Villa'/>
          <Pill label='Free Schedule'/>
          <Pill label='Book Now, Pay later'/>
          <Pill label='Self CheckIn'/>
          <Pill label='Instant Book'/>
        </div>

        <div className='space-x-2'>
          <Pill label='Filter' />
          <Pill label='Sort By: Highest Price' />
        </div>
      </div>
    </section>
  )
}

export default index