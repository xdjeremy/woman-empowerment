import Image from 'next/image'
import React from 'react'
import Pic from '../assets/Screenshot_from_2022-05-07_12-36-41-removebg-preview.png'

const Footer = () => {
  return (
    <div className="flex h-72 flex-col items-center justify-center bg-[#7E1B4C] px-9 text-white lg:px-[500px]">
      <div className="mt-12 flex flex-row items-center gap-12">
        <span className="text-right text-xl">
          <span className="font-bold">Don't be afraid.</span> Just know na may
          kakampi ka, lagi't lagi lalaban tayo para sa kababaihan. Maraming
          marami kang kakampi. <span className="font-bold">Laban lang.</span>
        </span>
        <Image src={Pic} width={300} height={300} className="rounded-full" />
      </div>
      <span className="mt-7 ml-auto text-right text-xl font-bold">
        {' '}
        - Vice Mayor Judy Vargas-Quiocho
      </span>
    </div>
  )
}

export default Footer
