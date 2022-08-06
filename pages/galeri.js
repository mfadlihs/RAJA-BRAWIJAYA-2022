import React, { useEffect } from 'react'
import Nav from '../layout/nav/Nav'

export default function galeri() {
    useEffect(()=>{
        console.log("ready")
    })
  return (
    <>
        <Nav variant={'white'}/>
        <div className='flex justify-center gap-3'>
            <div className='flex flex-col'>
                <div className='h-96 w-52 my-3 bg-black'></div>
                <div className='h-96 w-52 my-3 bg-black'></div>
                <div className='h-96 w-52 my-3 bg-black'></div>
                <div className='h-96 w-52 my-3 bg-black'></div>
                <div className='h-96 w-52 my-3 bg-black'></div>
                <div className='h-96 w-52 my-3 bg-black'></div>
                <div className='h-96 w-52 my-3 bg-black'></div>
            </div>
            <div className='flex flex-col'>
                <div className='h-96 w-52 my-3 bg-blue'></div>
                <div className='h-96 w-52 my-3 bg-blue'></div>
                <div className='h-96 w-52 my-3 bg-blue'></div>
                <div className='h-96 w-52 my-3 bg-blue'></div>
                <div className='h-96 w-52 my-3 bg-blue'></div>
                <div className='h-96 w-52 my-3 bg-blue'></div>
                <div className='h-96 w-52 my-3 bg-blue'></div>
            </div>
        </div>
    </>
  )
}
