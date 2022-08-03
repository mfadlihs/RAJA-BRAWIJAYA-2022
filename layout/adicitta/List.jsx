import React from 'react'

export default function List({img,name}) {
  return (
    <div>
        <button className="bg-white rounded-lg shadow-2xl flex justify-center items-center mx-auto h-36 lg:h-44 w-full">
            <img
            src={img}/>
        </button>
        <h4 className='font-agrandir text-center text-2xl text-white mt-3'>{name}</h4>
    </div>
  )
}
