import React from 'react'
import Pill from '@/components/common/Pill'
import Card from '@/components/common/Card'
import Image from 'next/image'
import { PROPERTYLISTINGSAMPLE } from '@/constants'


const index: React.FC = () => {

  const samples = PROPERTYLISTINGSAMPLE
  return (
    <>
      <section className='w-full flex flex-col-reverse gap-y-4 px-4 md:px-16 md:flex-col'>
        <div className='relative w-full h-72 md:h-[481px]'>
          <Image 
            src='/assets/image-1.png' 
            alt='background image' 
            className='rounded-3xl w-full h-auto object-cover' 
            fill 
            priority
          />
          
          <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 space-y-3'>
            <p className='text-4xl font-extrabold'>Find Your Favorite Place Here</p>
            <p className='text-sm'>The best prices for over 2 million properties worldwide</p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  
          <div className="scrollbar-hide flex w-full gap-2 overflow-x-auto md:overflow-visible md:w-full lg:max-w-2xl  lg:justify-between [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <Pill label="All" className="whitespace-nowrap" />
              <Pill label="Top Villa" className="whitespace-nowrap" />
              <Pill label="Free Schedule" className="whitespace-nowrap" />
              <Pill label="Book Now, Pay later" className="whitespace-nowrap" />
              <Pill label="Self CheckIn" className="whitespace-nowrap" />
              <Pill label="Instant Book" className="whitespace-nowrap" />
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Pill label="Filter" />
            <Pill label="Sort By: Highest Price" className="hidden md:inline-block" />
          </div>

      </div>
      </section>

        
        <section className='w-full mt-12 px-4 grid grid-cols-1 gap-6  md:px-16 md:grid-cols-3 '>
          {samples.map((sample, index) => (
            <Card key={index} id={index} name={sample.name} address={sample.address} rating={sample.rating} category={sample.category} price={sample.price} offers={sample.offers} image={sample.image} />
          ))}
        </section>
    </>
  )
}

export default index