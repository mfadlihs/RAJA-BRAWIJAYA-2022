import { Pagination } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import Ytvideo from "@/component/video/Ytvideo";
import { Ukm } from "@/constants/types";
import Youtube from "@/component/youtube";

interface UkmGalleryProps {
	data: string[];
}

export default function UkmGallery({ data }: { data: Ukm }) {
	return (
		<div className='relative mb-14 md:mb-20'>
			<div className='h3 mb-3 text-white'>Galeri UKM</div>
			<div className='bg-gray-400 mb-6 aspect-[2/1] rounded-xl overflow-clip'>
				<Youtube id={data.youtube_vidio} />
			</div>
			<div>
				<Swiper
					spaceBetween={10}
					slidesPerView={2.5}
					loop={true}
					grabCursor={true}
					centeredSlides={true}
				>
					{data.image.map((link, index) => {
						if (link === null) return <></>;
						return (
							<SwiperSlide key={index}>
								<div className='bg-gray-400 rounded-lg overflow-clip shadow-xl w-full aspect-video'>
									<img src={link} className=' w-full h-full object-cover' />
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}
