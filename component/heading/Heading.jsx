import React from 'react'
import style from './style.module.css'
export default function Heading({top,bottom,direction}) {
  return (
    <div className={`flex items-center flex-col w-fit ${direction == 'center' ? 'mx-auto' : ' '}`}>
        <div className='flex items-center justify-center mx-auto w-fit'>
            <img
            className='w-[40px] md:w-[52px] lg:w-[120px]'
            src='/assets/images/awan.png'/>
            <h1 className='text-blue mb-2 font-agrandir text-xl lg:text-7xl md:text-3xl'>{top}</h1>
            <img
            className={`w-[40px] md:w-[52px] lg:w-[120px] ${style.reverse}`}
            src='/assets/images/awan.png'/>
        </div>
        <div>
            <h1 className='text-yellow ml-6 font-agrandir text-xl lg:text-7xl md:text-3xl'>{bottom}</h1>
        </div>
    </div>
  )
}
