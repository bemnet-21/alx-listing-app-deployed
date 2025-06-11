import { PillProps } from '@/interfaces'
import React from 'react'

const Pill: React.FC<PillProps> = ({
    label,
    bgColor = 'bg-white',
    textColor = 'text-[#161117]'
}) => {
  return (
    <button className={`${bgColor} ${textColor} border border-[#E9E9E9] rounded-3xl w-fit p-2`}>{label}</button>
  )
}

export default Pill