import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 lg:pl-[60px] duration-700'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
                </div>

                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi I'm Bilal, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am a self-taught developer and have learnt coding using various 
                        online courses from Codecademy and Freecodecamp. I am passionate about
                        working with new technologies and building excellent software that improves
                        the lives of those around me. I specialise in Front-End Web Development.</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About;