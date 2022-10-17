import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function UkmGallery() {
	return (
		<div className='relative mb-20'>
			<div className='h3 text-white'>Galeri UKM</div>
			{/* video */}
			<div className='bg-gray-400 mb-6 aspect-[2/1]' />
			<div>
				<Swiper
					spaceBetween={20}
					slidesPerView={2.5}
					loop={true}
					grabCursor={true}
					centeredSlides={true}
				>
					<SwiperSlide>
						<div className='bg-gray-400 w-full aspect-video' />
					</SwiperSlide>
					<SwiperSlide>
						<div className='bg-yellow w-full aspect-video' />
					</SwiperSlide>
					<SwiperSlide>
						<div className='bg-orange w-full aspect-video' />
					</SwiperSlide>
					<SwiperSlide>
						<div className='bg-gray-400 w-full aspect-video' />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
