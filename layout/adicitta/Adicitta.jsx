import React from 'react'
import Button from '../../component/button/Adhicitta'
import List from './List'

export default function Adicitta() {
  return (
    <div className='bg-white py-24'>
        <div className='container'>
            <div className="bg-blue rounded-lg p-10 lg:flex lg:items-center">
                <div className='w-1/2 mx-auto lg:w-1/4 lg:ml-10'>
                    <h4 className='text-white text-center font-agrandir text-4xl font-semibold lg:text-start lg:text-6xl lg:w-1/2'>Adicitta <span className='opacity-50'>Info</span></h4>
                    <Button className="hidden lg:block lg:mt-6">Lihat lainnya</Button>
                </div>
                <div className='md:flex md:mt-6 lg:w-3/4 lg:justify-center'>
                    <div className='mx-auto md:w-full lg:mx-10 md:mx-3 mt-10 md:mt-0'>
                        <List
                        img={'/assets/icons/icTwibbon.svg'}
                        name="Twibbon"/>
                    </div>
                    <div className='mx-auto md:w-full lg:mx-10 md:mx-3 mt-4 md:mt-0'>
                        <List
                        img={'/assets/icons/icAtribut.svg'}
                        name="Atribut"/>
                    </div>
                    <div className='mx-auto md:w-full lg:mx-10 md:mx-3 mt-4 md:mt-0'>
                        <List
                        img={'/assets/icons/icPanduan.svg'}
                        name="Panduan"/>
                    </div>
                </div>
                <div className="lg:hidden flex justify-center mt-6">
                    <Button>Lihat Lainnya</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
