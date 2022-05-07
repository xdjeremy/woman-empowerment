import Image from 'next/image'
import React from 'react'
import Opinion from '../assets/undraw_opinion_re_jix4.svg'
import Choose from '../assets/undraw_choose_re_7d5a.svg'
import Tutorial from '../assets/undraw_tutorial_video_re_wepc.svg'
import Updated from '../assets/undraw_updated_re_u4yh.svg'
import Wave from '../assets/wave.svg'

const Definition = () => {
  return (
    <div className="bg-[#7E1B4C]">
      <div className="mb-10 px-4 lg:px-[309px]">
        <h1 className="pt-24 text-center text-4xl font-bold text-white underline md:text-6xl">
          What is Women Empowerment?
        </h1>
        <div className="mt-28 flex flex-col gap-24 lg:px-44">
          <div className="flex flex-row items-center justify-center gap-36">
            <Image src={Opinion} width={411} height={324} />
            <span className="font-montserrat text-2xl text-white">
              Accepting women's opinions and views
            </span>
          </div>
          <div className="flex flex-row items-center justify-center gap-36">
            <span className="text-right font-montserrat text-2xl text-white">
              Encouraging women to try and carry out new ventures in all
              professions.
            </span>
            <Image src={Choose} width={411} height={324} />
          </div>
          <div className="flex flex-row items-center justify-center gap-36">
            <Image src={Tutorial} width={413} height={311} />
            <span className="text-left font-montserrat text-2xl text-white">
              Educating children.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center gap-36">
            <span className="text-right font-montserrat text-2xl text-white">
              Creating awareness about self worth and confidence.
            </span>
            <Image src={Updated} width={411} height={324} />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1b1b1e"
          fill-opacity="1"
          d="M0,160L40,181.3C80,203,160,245,240,234.7C320,224,400,160,480,149.3C560,139,640,181,720,176C800,171,880,117,960,117.3C1040,117,1120,171,1200,170.7C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export default Definition
