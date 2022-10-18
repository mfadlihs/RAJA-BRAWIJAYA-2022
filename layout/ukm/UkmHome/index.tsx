import Nav from "@/layout/nav/Nav";
import { apiUkmHome } from "@/lib/api";
import Link from "next/link";
import { useContext, useEffect, useMemo, useState } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CloudLayer, WhiteLayer } from "../style";
import dummy from "./dummy.json";
import { Navigator, UkmCategory } from "./style";
import { ukm } from "@/api/ukm";
import { UkmByCategory } from "@/constants/types";
import swiperCategory from "./category.json";
import LoadingPage from "@/component/LoadingPage";
import UkmCard from "./UkmCard";
import { useMediaQuery } from "react-responsive";

export default function UkmHome() {
	const ukmData = useContext(ukm);
	const [category, setCategory] = useState<string>("Kesenian");

	const { ukmByCategory, loadingHome } = ukmData;

	const lg = useMediaQuery({ query: "(min-width: 1024px)" });
	const md = useMediaQuery({ query: "(min-width: 768px)" });
	const sm = useMediaQuery({ query: "(min-width: 640px)" });

	return (
		<>
			{loadingHome ? (
				<LoadingPage />
			) : (
				<div className='bg-green select-none overflow-x-hidden'>
					<Nav variant='white' trans={true} />
					<CloudLayer className=''>
						<WhiteLayer className=''>
							<div className='pt-32 lg:pt-28 h-screen lg:h-auto min-h-auto lg:min-h-screen'>
								<div className=''>
									<Swiper
										onSlideChange={swiperCore => {
											const { realIndex } = swiperCore;
											setCategory(swiperCategory[realIndex]!.value);
										}}
										slidesPerView={2}
										loop={true}
										centeredSlides={true}
										grabCursor={true}
									>
										{swiperCategory.map(e => {
											return (
												<SwiperSlide key={e.index} className='fasd'>
													{({ isActive }) => {
														return (
															<UkmCategory
																className='w-full font-agrandir font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl'
																isActive={isActive}
															>
																{e.value}
															</UkmCategory>
														);
													}}
												</SwiperSlide>
											);
										})}
									</Swiper>
								</div>
								{/* <div className='mt-24 mb-8  mx-auto h-3/5 w-min'> */}
								<div className='mt-24 mb-8 mx-auto h-3/5 md:h-auto w-max md:w-auto'>
									<Swiper
										effect={"coverflow"}
										grabCursor={true}
										centeredSlides={true}
										spaceBetween={10}
										slidesPerView={2}
										coverflowEffect={{
											rotate: 50,
											stretch: 0,
											depth: 100,
											modifier: 1,
											slideShadows: true,
										}}
										navigation={{
											nextEl: "#ukm-detail-next",
											prevEl: "#ukm-detail-prev",
										}}
										modules={[Navigation, EffectCoverflow]}
										className='mySwiper relative h-full'
										keyboard
										loop={true}
										direction={md ? "horizontal" : "vertical"}
										mousewheel
									>
										{ukmByCategory[category as keyof UkmByCategory].map(val => {
											return (
												<SwiperSlide key={val.id}>
													{({ isActive }) => {
														return <UkmCard isActive={isActive} val={val} />;
													}}
												</SwiperSlide>
											);
										})}
										<Navigator
											isNext={true}
											className='lg:block hidden'
											id='ukm-detail-next'
										>
											NEXT
										</Navigator>
										<Navigator
											isNext={false}
											className='lg:block hidden'
											id='ukm-detail-prev'
										>
											PREV
										</Navigator>
									</Swiper>
								</div>
								<div>.</div>
							</div>
						</WhiteLayer>
					</CloudLayer>
				</div>
			)}
		</>
	);
}
