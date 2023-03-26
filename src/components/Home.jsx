import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] lg:pl-[60px] duration-1000'>

    {/* Container */}  
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-pink-600'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Bilal Ahsan</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm an Aspiring Developer</h2>
      <p className='text-[#8892b0] py-4 max-w-[700px]'
      > I am a self-taught developer, currently focused on creating responsive web applications using React.
      </p>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
        >View Work
        <span className='group-hover:rotate-90 duration-500'>
          <HiArrowNarrowRight className='ml-2'/>
        </span>
        </button>
      </div>
    </div>

    </div>
  )
}

export default Home;