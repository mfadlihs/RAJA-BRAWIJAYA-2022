import React from 'react'

export default function Warna({color, makna}) {
  return (
    <div className='flex p-3'>
        <div className={`w-5 mr-1 h-5 rounded-full`} style={{background : color}}></div>
        <p className='font-poppins'>{makna}</p>
    </div>
  )
}
