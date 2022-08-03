import React from 'react'

export default function RangkaianSlide({img,name,date,children}) {
  return (
    <div className='container mt-10 md:flex'>
        <img src={img} className='w-2/3 md:w-1/2 mx-auto'/>
        <div className='mt-6'>
            <h5 className='font-agrandir text-green text-center text-4xl lg:text-6xl font-semibold lg:text-start'>{name}</h5>
            <h3 className='text-white text-lg text-center font-agrandir lg:text-start lg:text-3xl lg:mt-4'>{date}</h3>
            <p className='text-white font-poppins text-justify mt-4 lg:text-xl lg:mt-6'>{children}</p>
        </div>
    </div>
  )
}
