import React from 'react'

export default function Ytvideo({id,name}) {
  return (
    <>
        <div className='w-full md:pr-0'>
            <iframe width="100%" className='rounded-xl h-[200px] lg:h-[400px]' src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h1 className='font-agrandir text-2xl lg:text-4xl mt-4 pb-20 text-white'>{name}</h1>
    </>
  )
}
