import React, { useEffect, useState } from "react";
import Heading from "../../component/heading/Heading";
import Warna from "../../component/logo/Warna";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Button from "../../component/logo/Button";
import { motion } from "framer-motion";

const data = [
	{
		id: "A",
		simbol: "MUKA HADAP DEPAN AGAK MIRING",
		arti: "Lambang kebijakan dan masa depan",
	},
	{
		id: "B",
		simbol: "IKON ATOM",
		arti: "Merepresentasikan Cendekiawan",
	},
	{
		id: "C",
		simbol: "SUMPING TELINGA BERBENTUK SAYAP",
		arti: "Melambangkan mereka berpendapat.",
	},
	{
		id: "D",
		simbol: "TIGA BINTANG",
		arti: "Tri Dharma Perguruan Tinggi",
	},
	{
		id: "E",
		simbol: "MAHKOTA RADEN WIJAYA",
		arti: "Raden Wijaya sebagai tokoh yang terdapat dalam lambang Universitas Brawijaya",
	},
	{
		id: "F",
		simbol: "TONGKAT JENDRAL",
		arti: "Melambangkan kebijaksanaan",
	},
	{
		id: "G",
		simbol: "GELUNG SUPIT URANG",
		arti: "Melambangkan keluhuran budi dan semagat menggapai cita.",
	},
	{
		id: "H",
		simbol: "JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH",
		arti: "Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi",
	},
];
export default function Logo() {
	const [active, setActive] = useState("A");

	useEffect(() => {}, []);

	const getData = () => {
		return data.filter(e => {
			return e.id == active;
		})[0];
	};
	return (
		<div className='py-24'>
			<Heading
				direction={"center"}
				top='Filosofi'
				bottom='Logo RAJA Brawijaya'
			/>
			<div className='container'>
				<div className='flex flex-wrap justify-center mt-10'>
					<Warna color='#033E50' makna='Adaptif dan Terang' />
					<Warna color='#3E8678' makna='Kolaboratif' />
					<Warna color='#F69534' makna='Generasi Emas' />
					<Warna color='#E4B59B' makna='Keseriusan' />
				</div>
				<div className='mt-10'>
					<motion.img
						animate={{
							y: [0, 30, 0],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
						}}
						src={`/assets/logo/icLogo${active}.png`}
						className='w-48 md:w-64 lg:w-96 -mb-10 relative mx-auto'
						alt=''
					/>
					<img
						src='/assets/logo/box.png'
						className='w-48 md:w-64 lg:w-96 mx-auto'
						alt=''
					/>
				</div>
				<h5 className='text-orange text-center font-agrandir text-xl mb-2 mt-4 lg:text-4xl'>
					{getData().simbol}
				</h5>
				<p className='text-center font-poppins mb-14 lg:text-lg lg:w-8/12 lg:mx-auto'>
					{getData().arti}
				</p>
				<Swiper
					breakpoints={{
						0: {
							slidesPerView: 4,
						},
						767.8: {
							slidesPerView: 8,
						},
					}}
				>
					{data.map(e => {
						return (
							<SwiperSlide key={e.id}>
								<Button
									img={e.id}
									active={active}
									setActive={e => {
										setActive(e);
									}}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}
