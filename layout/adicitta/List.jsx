import React, { useState } from 'react'
import {motion} from 'framer-motion'

export default function List({img,name}) {

  return (
    <div className='group'>
        <motion.button
        whileHover={{
          scale : 1.2,
          transition : {
            duration : 1
          }
        }}
        className="bg-white rounded-lg shadow-2xl flex justify-center items-center mx-auto h-36 lg:h-44 w-full">
            <img
            src={img}/>
        </motion.button>
        <h4 className='font-agrandir text-center text-2xl text-white mt-3 group-hover:hidden'>{name}</h4>
    </div>
  )
}
