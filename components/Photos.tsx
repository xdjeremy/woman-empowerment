import Image from 'next/image'
import React from 'react'

const Photos = () => {
  return (
    <div className="h-[856px] bg-[#7E1B4C]">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
            className="w-full"
            width={800}
            height={200}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
            className="w-full"
            width={800}
            height={200}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
            className="w-full"
            width={800}
            height={200}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
            className="w-full"
            width={800}
            height={200}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos
