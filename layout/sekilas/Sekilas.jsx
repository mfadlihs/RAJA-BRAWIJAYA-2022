import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import YouTube from "react-youtube";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Heading from "../../component/heading/Heading";
import Ytvideo from "../../component/video/Ytvideo";
import { motion } from "framer-motion";
import { apiVidio } from "../../lib/api";
const initialState = [
	{
		link: "8T7syCDLytA",
		title: "Sambutan Rektor",
	},
	{
		link: "QSXYlrcKPa4",
		title: "Teaser RAJA BRAWIJAYA 2022",
	},
	{
		link: "OaxknaaEtjY",
		title: "Sidak Mahasiswa Universitas Brawijaya",
	},
	{
		link: "04eVOzp7FFk",
		title: "Koreo Flashmob Gelora Brawijaya",
	},
	{
		link: "BAc0cW51cQ8",
		title: "Jingle RAJA BRAWIJAYA 2022",
	},
];

export default function Sekilas() {
	const swiperHook = useSwiper();
	const [vidio, setVidio] = useState(initialState);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		apiVidio()
			.then(res => {
				if (res.data.length > 0) {
					setVidio(res.data);
				}
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<div className='relative'>
			<div
				className={`container mx-auto bg-left-bottom flex cover flex-col justify-center bg-white`}
			>
				<Heading
					top='Sekilas'
					bottom='RAJA Brawijaya'
					direction={"right"}
					className='mt-10 md:mt-32 lg:mt-64'
				/>
			</div>

			<div className='bg-blue pt-10 mt-10 md:mt-[100px] lg:mt-[200px] px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem]'>
				{loading ? (
					<div role='status' className='w-full animate-pulse space-y-5 mt-5'>
						<div className='flex items-center space-x-2 w-full'>
							{Array.from(Array(2).keys()).map(i => (
								<div className='flex flex-col  w-full relative space-y-2'>
									<div className='h-80 bg-gray-200 rounded-xl dark:bg-gray-500 w-full'></div>
									<div className='h-10 bg-gray-200 rounded-xl dark:bg-gray-500 w-full'></div>
								</div>
							))}
						</div>
						<div className='h-3 bg-gray-200 rounded-xl dark:bg-gray-500 w-full'></div>
						<div className='flex flex-row justify-between'>
							{Array.from(Array(2).keys()).map(i => (
								<div className='h-4 bg-gray-200 rounded-lg dark:bg-gray-500 w-1/12 '></div>
							))}
						</div>
					</div>
				) : (
					<Swiper
						modules={[Pagination, Navigation]}
						spaceBetween={50}
						pagination={{
							type: "progressbar",
						}}
						navigation={{
							nextEl: ".swipe-next-c",
							prevEl: ".swipe-prev-c",
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							767.8: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
						}}
					>
						{vidio.map((item, index) => (
							<SwiperSlide key={index}>
								<Ytvideo id={item.link} name={item.title} />
							</SwiperSlide>
						))}
						<motion.button
							whileHover={{
								x: -10,
							}}
							transition={{
								duration: 0.5,
							}}
							className='absolute swipe-prev-c bottom-0 md:bottom-0 left-0 z-50 text-white font-agrandir'
						>
							&larr; Geser ke kiri
						</motion.button>
						<motion.button
							whileHover={{
								x: 10,
							}}
							transition={{
								duration: 0.5,
							}}
							className='swipe-next-c absolute bottom-0 md:bottom-0 z-50 right-0 text-white font-agrandir'
						>
							Geser ke Kanan &rarr;
						</motion.button>
					</Swiper>
				)}
			</div>

			<img
				className='top-0 absolute md:object-cover md:object-top w-full'
				src='/assets/images/roketSekilasRaja.png'
				alt=''
			/>
		</div>
	);
}
