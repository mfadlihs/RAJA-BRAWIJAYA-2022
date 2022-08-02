import React from 'react'
import styled from 'styled-components'
import style from './style.module.css'

export default function Jumbotron() {

    const Video = styled.div`
        &::after{
            content : '';
            position : absolute;
            inset : 0;
            background : #033E50;
            opacity : 80%;
        }
    `

    const Text2022 = styled.h3`
        -webkit-text-stroke: 1px white;
    `
  return (
    <div className='relative'>
        <Video className={`relative w-full h-screen ${style.video}`}>
				<video
					muted={true}
					className='object-cover z-10 w-full h-full'
					autoPlay={true}
					loop
					controls={false}
				>
					<source src='/assets/videos/v.mp4' type='video/mp4' />
				</video>
        </Video>
        <div className="absolute inset-0">
            <div className="container mx-auto relative flex flex-col h-full lg:flex-row lg:items-center">
                <h1 className='font-droid mt-52 lg:mt-0 text-6xl md:text-[120px] lg:w-4/6 text-white'>RAJA Brawijaya</h1>
                <Text2022 className={`text-8xl md:text-[146px] mt-28 lg:mt-0 font-droid text-trans stroke-white lg:rotate-90 lg:absolute lg:right-0  ${style.stroke}`}>2022</Text2022>
            </div>
        </div>
        <img
        src='/assets/images/awanJumbotron.svg'
        className='w-full object-cover absolute bottom-0 lg:-bottom-10'/>
    </div>
  )
}
