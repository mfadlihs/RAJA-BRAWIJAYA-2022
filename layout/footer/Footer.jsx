import React from 'react'
import List from '../../component/footer/List'

const sosmed = [
    {
        'img' : '/assets/icons/li.svg',
        'link' : 'https://line.com/rabraw'
    },
    {
        'img' : '/assets/icons/ig.svg',
        'link' : 'https://instagram.com/rabraw'
    },
    {
        'img' : '/assets/icons/tw.svg',
        'link' : 'https://twitter.com/rabraw'
    },
    {
        'img' : '/assets/icons/tel.svg',
        'link' : 'https://telegram.com/rabraw'
    },
    {
        'img' : '/assets/icons/tik.svg',
        'link' : 'https://tiktok.com/rabraw'
    },
    {
        'img' : '/assets/icons/yt.svg',
        'link' : 'https://youtube.com/rabraw'
    },
    {
        'img' : '/assets/icons/spo.svg',
        'link' : 'https://spotify.com/rabraw'
    },
]
export default function Footer() {
  return (
    <footer className='bg-yellow py-14'>
        <div className="container mx-auto">
            <h1 className='font-agrandir font-bold text-white text-2xl lg:text-5xl'>Sekretariat RAJA Brawijaya</h1>
            <div className='mt-8'>
                <List
                icon={'/assets/icons/icLocation.svg'}>Gedung EM-DPM UB Lantai 1, Jln. Veteran 06C Malang 65145</List>
                <List
                icon={'/assets/icons/icEmail.svg'}>rajabrawijaya2021@gmail.com</List>
                <List
                icon={'/assets/icons/icPhone.svg'}>0816-552-514</List>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex mt-8">
                    {sosmed.map((e)=>{
                        return(
                            <a href={e.link} key={e.link}>
                                <img className='w-8 mx-1 lg:w-10' src={e.img} alt="" />
                            </a>
                        )
                    })}
                </div>
                <p className='font-poppins text-white mt-8'>©2021, Tim IT RAJA Brawijaya 2021</p>
            </div>
        </div>
    </footer>
  )
}
