import { type OptionProps } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

const Option: React.FC<OptionProps> = ({image, alt, height, width}) => {
  return (
    <>
        <Image src={image} alt={alt} width={width} height={height}/>
    </>
  )
}

export default Option