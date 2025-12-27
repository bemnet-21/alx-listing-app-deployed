import { PillProps } from '@/interfaces'
import React from 'react'

const Pill: React.FC<PillProps> = ({
    label,
    bgColor = 'bg-white',
    textColor = 'text-[#161117]',
    className
}) => {
  return (
    <button className={`${bgColor} ${textColor} border border-gray-400 rounded-3xl max-h-fit w-fit px-3 py-1 ${className} transition duration-300 ease-in-out shadow-md hover:bg-green-400`}>{label}</button>
  )
}

export default Pill