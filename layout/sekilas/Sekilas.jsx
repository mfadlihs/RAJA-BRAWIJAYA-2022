import React from 'react'
import style from './style.module.css'
import YouTube from 'react-youtube';
import { Pagination, Navigation } from 'swiper';
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Heading from '../../component/heading/Heading';
import Ytvideo from '../../component/video/Ytvideo';


export default function Sekilas() {
    const swiperHook = useSwiper();
  return (
    <div className='relative'>
        <div className={`container mx-auto bg-left-bottom flex cover flex-col justify-center bg-white`}>
            <Heading
            top="Sekilas"
            bottom="RAJA Brawijaya"
            direction={"right"}
            className="mt-10 md:mt-32 lg:mt-64"/>
        </div>
        <div className='bg-blue pt-10 mt-10 md:mt-[100px] lg:mt-[200px] px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem]'>

            <Swiper
                modules={[Pagination,Navigation]}
                spaceBetween={50}
                pagination
                navigation= {{
                    nextEl: '.swipe-next-c',
                    prevEl : '.swipe-prev-c'
                }}
                breakpoints = {{
                    0 : {
                        slidesPerView : 1
                    },
                    767.8 : {
                        slidesPerView : 2,
                        spaceBetween : 20,
                        pagination : {
                            type : "progressbar"
                        }
                    }
                }}
                >
                
                <SwiperSlide>
                    <Ytvideo
                    id={"9wIk3nQhtmg"}
                    name="Sambutan Rektor"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Ytvideo
                    id={"SJXdAxNX0Ow"}
                    name="Countdown Raja Brawijaya 2021"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Ytvideo
                    id={"SJXdAxNX0Ow"}
                    name="Countdown Raja Brawijaya 2021"/>
                </SwiperSlide>
                <button
                className='absolute swipe-prev-c bottom-0 md:bottom-0 left-0 z-50 text-white font-agrandir'>&larr; Geser ke kiri</button>
                <button
                className='swipe-next-c absolute bottom-0 md:bottom-0 z-50 right-0 text-white font-agrandir'>Geser ke Kanan &rarr;</button>
            </Swiper>
        </div>
        <img
        className='top-0 absolute md:object-cover md:object-top w-full'
        src="/assets/images/roketSekilasRaja.png" alt="" />
    </div>
  )
}
