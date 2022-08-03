import React from 'react'
import style from './style.module.css'
export default function Heading({top,bottom,direction,className,topWhite}) {
  return (
    <div className={`${className != undefined ? className : ' '} flex items-center flex-col w-fit ${direction == 'center' ? 'mx-auto' : ' '} ${direction == 'right' ? 'ml-auto' : ' '}`}>
        <div className='flex items-center justify-center mx-auto w-fit'>
            <img
            className='w-[45px] md:w-[52px] lg:w-[120px]'
            src='/assets/images/awan.png'/>
            <h1 className={` font-agrandir font-bold text-3xl lg:text-7xl md:text-5xl ${topWhite ? 'text-white' : 'text-blue'}`}>{top}</h1>
            <img
            className={`w-[45px] md:w-[52px] lg:w-[120px] ${style.reverse}`}
            src='/assets/images/awan.png'/>
        </div>
        <div>
            <h1 className='text-yellow font-agrandir font-bold text-3xl lg:text-7xl md:text-5xl'>{bottom}</h1>
        </div>
    </div>
  )
}
