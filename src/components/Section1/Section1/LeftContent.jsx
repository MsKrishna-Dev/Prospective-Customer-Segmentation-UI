import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Hero from './Hero'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-center gap-10 w-1/3 '>
        <Hero />
        <Arrow />
        
    </div>
  )
}

export default LeftContent