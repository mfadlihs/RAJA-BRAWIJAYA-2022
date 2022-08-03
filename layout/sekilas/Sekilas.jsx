import React from 'react'
import style from './style.module.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import YouTube from 'react-youtube';

import 'swiper/css';


export default function Sekilas() {
  return (
    <div>
        <div className={`container over mx-auto bg-left-top flex h-[50px] flex-col justify-center bg-white ${style.bg}`}>
            <h3 className='text-center w-fit ml-auto font-agrandir text-blue mb-20'>
                <span className='text-orange'>Sekilas</span><br/>RAJA BRAWIJAYA
            </h3>
        </div>
        {/* <div className='bg-blue'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className='h-56'>
                        <YouTube videoId='9wIk3nQhtmg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div> */}
    </div>
  )
}
