import React from "react";
import Heading from "../../component/heading/Heading";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Keyboard } from "swiper";
import "swiper/css";
import RangkaianSlide from "../../component/rangkaian/RangkaianSlide";

export default function Rangkaian() {
	return (
		<div className='bg-blue py-24'>
			<Heading topWhite top='Rangkaian' bottom='Utama' direction='center' />

			<Swiper
				className='relative'
				modules={[Navigation]}
				navigation={{
					nextEl: ".custom-rangkaian-next",
					prevEl: ".custom-rangkaian-prev",
				}}
				keyboard
				slidesPerView={1}
			>
				<SwiperSlide>
					<RangkaianSlide
						img='/assets/images/icPKKMB.png'
						name='PKKMB'
						date='16 Agustus - 18 Agustus 2022'
					>
						PKKMB atau Pengenalan Kehidupan Kampus Baru Mahasiswa Baru
						Universitas Brawijaya merupakan kegiatan penyambutan mahasiswa baru
						yang bertujuan untuk mengenal lebih dekat Universitas Brawijaya
						dengan harapan terbentuk rasa cinta dan rasa bangga akan
						almamaternya.
					</RangkaianSlide>
				</SwiperSlide>
				<SwiperSlide>
					<RangkaianSlide
						img='/assets/images/icOH.png'
						name='Open House'
						date='22 Agustus - 23 Agustus 2022'
					>
						OH merupakan kegiatan penutup dari rangkaian acara RAJA Brawijaya
						dimana mahasiswa baru dapat mengenal dan memilih LKM atau UKM yang
						ada di kampus Universitas Brawijaya sesuai dengan bakat serta minat
						yang dimiliki.
					</RangkaianSlide>
				</SwiperSlide>
				<div className='absolute top-[25%] left-0 sm:left-1 md:left-2 scale-75 hover:cursor-pointer sm:scale-100 text-white text-4xl mx-4 z-50 custom-rangkaian-prev'>
					<img src='/assets/images/kanan.png' className='rotate-180' />
				</div>
				<div className='absolute top-[25%] right-0 sm:right-1 md:right-2 scale-75 hover:cursor-pointer sm:scale-100 text-white text-4xl z-50 mx-4 custom-rangkaian-next'>
					<img src='/assets/images/kanan.png' />
				</div>
				{/* <div className='custom-rangkaian-next w-8 h-8 bg-yellow'></div>
				<button className='custom-rangkaian-prev'>asd</button> */}
			</Swiper>
		</div>
	);
}
