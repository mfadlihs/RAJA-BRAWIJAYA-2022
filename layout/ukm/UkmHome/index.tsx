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

export default function UkmHome() {
	const ukmData = useContext(ukm);
	const [category, setCategory] = useState<string>("Kesenian");

	const { ukmByCategory, loadingHome } = ukmData;

	useEffect(() => {
		console.log(ukmByCategory);
	}, [ukmByCategory]);

	return (
		<>
			{loadingHome ? (
				<LoadingPage />
			) : (
				<div className='bg-green select-none overflow-x-hidden min-h-screen'>
					<Nav variant='white' trans={true} />
					<CloudLayer>
						<WhiteLayer>
							<div className='pt-28'>
								<div className='mb-12'>
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
																className='w-full font-agrandir font-bold '
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
								<div className='pb-24'>
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
										className='mySwiper relative'
										keyboard
									>
										{ukmByCategory[category as keyof UkmByCategory].map(val => {
											return (
												<SwiperSlide key={val.id}>
													{({ isActive }) => {
														return (
															<Link
																href={isActive ? `/ukm/${val.slug}` : ""}
																scroll={false}
															>
																<a>
																	<div
																		className='bg-gray-400 w-full aspect-video flex items-center justify-center rounded-lg overflow-hidden'
																		style={{
																			transition: "background 2s",
																			background: isActive
																				? `linear-gradient(0deg, rgba(62, 134, 120, 0.6), rgba(62, 134, 120, 0.6)), url(/assets/images/ukm/uab.jpg)`
																				: `linear-gradient(0deg, rgba(241, 130, 3, 0.6), rgba(241, 130, 3, 0.6)), url(/assets/images/ukm/uab.jpg)`,
																		}}
																	>
																		<p className='font-agrandir text-center text-white text-7xl'>
																			{val.name}
																		</p>
																	</div>
																</a>
															</Link>
														);
													}}
												</SwiperSlide>
											);
										})}
										<Navigator isNext={true} id='ukm-detail-next'>
											NEXT
										</Navigator>
										<Navigator isNext={false} id='ukm-detail-prev'>
											PREV
										</Navigator>
									</Swiper>
								</div>
							</div>
						</WhiteLayer>
					</CloudLayer>
				</div>
			)}
		</>
	);
}
