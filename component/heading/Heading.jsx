import React from 'react'

export default function Heading({top,bottom,direction}) {
  return (
    <div className={`flex items-center w-fit ${direction == 'center' ? 'mx-auto' : ' '}`}>
        {/* <div className='flex items-center justify-center mx-auto w-fit'>
        </div> */}
        <img
        className='w-[40px] md:w-[52px] lg:w-[120px] lg:mb-5'
        src='/assets/images/awan.png'/>
        <div>
            <h1 className='text-blue -mb-4 font-agrandir text-xl lg:text-7xl md:text-3xl'>{top}</h1>
            <h1 className='text-yellow ml-6 font-agrandir text-xl lg:text-7xl md:text-3xl'>{bottom}</h1>
        </div>
        <img
        className='w-[40px] md:w-[52px] lg:w-[120px] mt-3 md:mt-6 lg:mt-16'
        src='/assets/images/awan.png'/>
    </div>
  )
}
