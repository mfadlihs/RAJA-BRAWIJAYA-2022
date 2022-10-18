import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Swiperrr() {
	return (
		<div className='mx-auto w-fit'>
			<Swiper slidesPerView={2} direction={"vertical"} className='h-64'>
				<SwiperSlide>
					<div className='bg-yellow w-12 h-12' />
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-yellow w-12 h-12' />
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-yellow w-12 h-12' />
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-yellow w-12 h-12' />
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-yellow w-12 h-12' />
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-yellow w-12 h-12' />
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-yellow w-12 h-12' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
