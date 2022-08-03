import React from 'react'
import Heading from '../../component/heading/Heading'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css';
import RangkaianSlide from '../../component/rangkaian/RangkaianSlide';

export default function Rangkaian() {
  return (
    <div className='bg-blue py-24'>
        <Heading
        topWhite
        top="Rangkaian"
        bottom="Utama"
        direction="center"/>

        <Swiper
        slidesPerView={1}>
          <SwiperSlide>
            <RangkaianSlide
            img="/assets/images/icPKKMB.png"
            name="PKKMB"
            date="18 Agustus - 18 Agustus 2020">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas ex suscipit earum illo velit molestiae! Id ea illum commodi facere possimus, quod vel porro repellendus unde, iusto architecto minima!</RangkaianSlide>
          </SwiperSlide>
          <SwiperSlide>
            <RangkaianSlide
            img="/assets/images/icOH.png"
            name="Open House"
            date="18 Agustus - 18 Agustus 2020">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas ex suscipit earum illo velit molestiae! Id ea illum commodi facere possimus, quod vel porro repellendus unde, iusto architecto minima!</RangkaianSlide>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}
