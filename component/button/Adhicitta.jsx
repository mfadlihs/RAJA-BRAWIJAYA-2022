import React from 'react'

export default function Adhicitta({children,className}) {
  return (
    <button className={`bg-yellow py-2 px-4 rounded-lg text-white font-agrandir ${className == undefined ? ' ' : className}`}>
        {children}
    </button>
  )
}
