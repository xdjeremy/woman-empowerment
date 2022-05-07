import Image from 'next/image'
import React from 'react'
import SuperWoman from '../assets/superwoman.svg'

const StrongWoman = () => {
  return (
    <div className="h-[900px] bg-black bg-[url('/patternpad.svg')] p-20 md:h-[1070px] lg:px-[309px]">
      <div className="flex flex-col">
        <div className="mb-52 max-w-4xl text-4xl font-bold text-white md:text-6xl">
          A <span className="text-pink">Woman</span> With A Voice Is, By
          Definition A <span className="text-blue">Strong</span>{' '}
          <span className="text-pink">Woman</span>.
        </div>
        <div className="flex justify-end">
          <span className="max-w-lg">
            <Image src={SuperWoman} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default StrongWoman
