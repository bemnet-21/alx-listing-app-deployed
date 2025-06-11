import React from "react"

export interface CardProps {
    title: string
    content: string
}
export interface ButtonProps {
    label: string
    onClick: () => void
}



export interface Address {
    state: string
    city: string
    country: string
}
export interface Offers {
    bed: string
    shower: string
    occupants: string
}
export interface PropertyProps {
    name: string
    address: Address
    rating: number
    category: string []
    price: number
    offers: Offers
    image: string
    discount?: string
}

export interface LayoutProps {
    children: React.ReactNode
}
export interface OptionProps {
    image: string
    alt: string
    width: number
    height: number
}

// At the top of your component file or in a separate data.ts file

export interface CategoryUIData {
  id: string;
  label: string;
  iconSrc: string; // Path to the icon relative to the public folder
}

export const categoriesUIData: CategoryUIData[] = [
  { id: 'rooms', label: 'Rooms', iconSrc: '/frames/Frame 28.png' },
  { id: 'mansion', label: 'Mansion', iconSrc: '/frames/Frame 31.png' },
  { id: 'countryside', label: 'Countryside', iconSrc: '/frames/Frame 46.png' },
  { id: 'villa', label: 'Villa', iconSrc: '/frames/Frame 30.png' },
  { id: 'tropical', label: 'Tropical', iconSrc: '/frames/Frame 32.png' },
  { id: 'new', label: 'New', iconSrc: '/frames/Frame 33.png' },
  { id: 'amazing_pool', label: 'Amazing pool', iconSrc: '/frames/Frame 34.png' },
  { id: 'beach_house', label: 'Beach house', iconSrc: '/frames/Frame 35.png' },
  { id: 'island', label: 'Island', iconSrc: '/frames/Frame 36.png' },
  { id: 'camping', label: 'Camping', iconSrc: '/frames/Frame 37.png' },
  { id: 'apartment', label: 'Apartment', iconSrc: '/frames/Frame 38.png' },
  { id: 'house', label: 'House', iconSrc: '/frames/Frame 39.png' },
  { id: 'lakefront', label: 'Lakefront', iconSrc: '/frames/Frame 40.png' },
  { id: 'farm_house', label: 'Farm house', iconSrc: '/frames/Frame 41.png' },
  { id: 'treehouse', label: 'Treehouse', iconSrc: '/frames/Frame 42.png' },
  { id: 'cabins', label: 'Cabins', iconSrc: '/frames/Frame 43.png' },
  { id: 'castles', label: 'Castles', iconSrc: '/frames/Frame 44.png' },
  { id: 'lakeside', label: 'Lakeside', iconSrc: '/frames/Frame 45.png' },
];