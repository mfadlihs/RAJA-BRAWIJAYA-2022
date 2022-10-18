import { Background, Pattern } from "../../constants/Images";
import Image from "next/dist/client/image";
import Nav from "../../layout/nav/Nav";
import Head from "next/dist/shared/lib/head";
import AdicittaCard from "../../layout/adcittaInfo/AdicittaCard";
import HeadingMini from "../../component/heading/HeadingMini";
import AdicittaCardMini from "../../layout/adcittaInfo/AdicittaCardMini";
import LoadingPage from "../../component/LoadingPage";
import { apiNews } from "../../lib/api";
import { useEffect, useState } from "react";

export default function AdiciittaInfo() {
	const [loading, setLoading] = useState(true);
	const [news, setNews] = useState([]);
	useEffect(() => {
		apiNews()
			.then(res => {
				setNews(res.data);
			})
			.catch(err => {})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	// date form database to indonesia format
	const date = date => {
		const dateSplit = date.split("-");
		const year = dateSplit[0];
		const month = dateSplit[1];
		let day = dateSplit[2];
		day = day.split("T")[0];
		return `${day}-${month}-${year}`;
	};
	return (
		<>
			{news.length === 0 ? (
				<LoadingPage />
			) : (
				<>
					<Head>
						<title>RAJA Brawijaya 2022 | Adicitta Info</title>
					</Head>

					<Nav variant='white' />

					<div className='after:candiHijau min-h-screen relative pt-24 pb-20'>
						<div>
							<div className='md:w-[50vw] h-full mx-4 md:mx-auto drop-shadow-md'>
								<Image
									src={Pattern.HeadingFull}
									layout='responsive'
									objectFit='cover'
									alt='RAJA Brawijaya'
								/>
							</div>
							<h1 className='text-center py-2 text-blue font-agrandir font-bold  text-3xl lg:text-[4rem] md:text-5xl'>
								Adicitta <span className='text-orange'>Info</span>
							</h1>
							<div className='rotate-180 mx-4 md:w-[50vw] h-full md:mx-auto'>
								<Image
									src={Pattern.HeadingFull}
									layout='responsive'
									objectFit='cover'
									alt='RAJA Brawijaya'
								/>
							</div>
							<div className='container pt-20 '>
								{/* <HeadingMini top={"Adicitta"} bottom=" Baru" /> */}
								<div className='flex lg:flex-row flex-col  lg:space-x-5 h-full items-center pt-5 '>
									<div className='lg:w-1/2 basis-1/2  h-full '>
										{news.length > 0 && (
											<AdicittaCard
												title={news[0].title}
												descipriton={news[0].summary}
												thumbnail={news[0].thumbnail}
												slug={news[0].slug}
												tanggal={date(news[0].created_at)}
											/>
										)}
									</div>
									<div className='flex-1 basis-1/2 md:space-y-2 items-between '>
										<div className='flex flex-1 md:space-x-5 md:flex-row flex-col '>
											{news.map((item, index) => {
												if (index > 0 && index < 3) {
													return (
														<div className='md:w-1/2 md:h-1/2'>
															<AdicittaCardMini
																title={item.title}
																descipriton={item.summary}
																thumbnail={item.thumbnail}
																slug={item.slug}
																tanggal={date(item.created_at)}
															/>
														</div>
													);
												}
											})}
										</div>
										<div className='flex flex-1 md:space-x-5 md:flex-row flex-col '>
											{news.map((item, index) => {
												if (index > 2 && index < 5) {
													return (
														<div className='md:w-1/2 md:h-1/2'>
															<AdicittaCardMini
																title={item.title}
																descipriton={item.summary}
																thumbnail={item.thumbnail}
																slug={item.slug}
																tanggal={date(item.created_at)}
															/>
														</div>
													);
												}
											})}
										</div>
									</div>
								</div>
							</div>
							{news.length > 5 && (
								<div className='container'>
									{/* <HeadingMini top={"Adicitta"} bottom=" Lama" /> */}
									<div className='flex md:flex-row flex-col  md:space-x-5 h-full items-center pt-5 '>
										<div className='flex-1  md:space-y-2 items-between  justify-between '>
											<div
												className={`flex flex-1 md:flex-row flex-col ${
													news % 3 == 0 ? "justify-between" : "justify-start"
												}  flex-wrap`}
											>
												{news.map((item, index) => {
													if (index > 4) {
														return (
															<div className='sm:w-1/3'>
																<AdicittaCardMini
																	title={item.title}
																	descipriton={item.summary}
																	thumbnail={item.thumbnail}
																	slug={item.slug}
																	tanggal={date(item.created_at)}
																	item={item}
																/>
															</div>
														);
													}
												})}
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
}
