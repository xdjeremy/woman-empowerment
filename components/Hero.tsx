import Image from 'next/image'
import React from 'react'
import house1 from '../assets/house1.svg'
import house2 from '../assets/house2.svg'

const Hero = () => {
  return (
    <>
      <div className="mt-44 mb-32 px-12 text-center font-montserrat text-4xl font-extrabold text-white drop-shadow-lg md:text-6xl">
        The Best <span className="text-blue">Man</span> For The Job Is A{' '}
        <span className="text-pink">Woman</span>
      </div>

      <div className="mt-72 flex flex-row items-end gap-32 md:gap-64">
        <Image src={house1} />
        <Image src={house2} />
      </div>
    </>
  )
}

export default Hero
