import React, { useState } from 'react'
import Heading from '../../component/heading/Heading'
import Warna from '../../component/logo/Warna'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css';
import Button from '../../component/logo/Button';

const data = [
    {
        'id' : 'A',
        'simbol' : 'JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH (Icon A)',
        'arti' : 'Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi (Icon A)'
    },
    {
        'id' : 'B',
        'simbol' : 'JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH (Icon B)',
        'arti' : 'Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi (Icon B)'
    },
    {
        'id' : 'C',
        'simbol' : 'JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH (Icon C)',
        'arti' : 'Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi (Icon C)'
    },
    {
        'id' : 'D',
        'simbol' : 'JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH (Icon D)',
        'arti' : 'Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi (Icon D)'
    },
    {
        'id' : 'E',
        'simbol' : 'JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH (Icon E)',
        'arti' : 'Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi (Icon E)'
    },
    {
        'id' : 'F',
        'simbol' : 'JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH (Icon F)',
        'arti' : 'Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi (Icon F)'
    },
    {
        'id' : 'G',
        'simbol' : 'JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH (Icon G)',
        'arti' : 'Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi (Icon G)'
    },
    {
        'id' : 'H',
        'simbol' : 'JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH (Icon H)',
        'arti' : 'Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi (Icon H)'
    }
]
export default function Logo() {

    const [active,setActive] = useState('A');

    const getData = () => {
        return data.filter((e)=>{
            return e.id == active
        })[0];
    } 
  return (
    <div className='py-24'>
        <Heading
        direction={'center'}
        top="Filosofi"
        bottom="Logo RAJA Brawijaya"
        />
        <div className="container">
            <div className='flex flex-wrap justify-center mt-10'>
                <Warna
                color="#033E50"
                makna="Adaptif dan Terang"
                />
                <Warna
                color="#3E8678"
                makna="Kolaboratif"
                />
                <Warna
                color="#F69534"
                makna="Generasi Emas"
                />
                <Warna
                color="#E4B59B"
                makna="Keseriusan"
                />
            </div>
            <div className='mt-10'>
                <img src={`/assets/logo/icLogo${active}.png`} className='w-48 md:w-64 -mb-10 relative mx-auto' alt="" />
                <img src="/assets/logo/box.png" className='w-48 md:w-64 mx-auto' alt="" />
            </div>
            <h5 className='text-orange text-center font-agrandir text-xl mb-2 mt-4 lg:text-4xl'>{getData().simbol}</h5>
            <p className='text-center font-poppins mb-14 lg:text-lg lg:w-8/12 lg:mx-auto'>{getData().arti}</p>
            <Swiper
            breakpoints={{
                0 : {
                    slidesPerView : 4
                },
                767.8 : {
                    slidesPerView : 8
                },
            }}>

                {data.map((e)=>{
                    return(
                        <SwiperSlide key={e.id}>
                            <Button
                            img={e.id}
                            active = {active}
                            setActive={(e)=>{
                                setActive(e)
                            }}/>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    </div>
  )
}
