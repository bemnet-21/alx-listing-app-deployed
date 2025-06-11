import React from 'react'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
const index: React.FC = () => {
  return (
    <section className='px-16 relative'>
      <Image src='/assets/image 1.png' alt='background image' width={1608} height={481} className='rounded-3xl' priority/>
      <div className='absolute text-7xl top-20.5 left-92.75 w-2xl h-96 text-center'>Find Your Favorite Place Here</div>
      <div className='absolute top-58 left-125 text-center'>The best prices for over 2 million properties worldwide</div>
    </section>
  )
}

export default index