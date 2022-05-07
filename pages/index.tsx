import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../assets/ribbon.png'
import Definition from '../components/Definition'
import Explain from '../components/Explain'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Photos from '../components/Photos'
import StrongWoman from '../components/StrongWoman'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-[#7E1B4C] font-montserrat">
      <div className="p-3">
        <Image src={logo} width={80} height={80} />
      </div>
      <Hero />
      <StrongWoman />
      <Definition />
      <Explain />
      <Photos />
      <Footer />
    </div>
  )
}

export default Home
