import React from 'react'

export default function List({icon,children}) {
  return (
    <div className='flex items-start mb-2'>
        <img src={icon} alt="" className='mr-2' />
        <p className='font-poppins text-white'>{children}</p>
    </div>
  )
}
