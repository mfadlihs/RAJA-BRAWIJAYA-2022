import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Background } from "../constants/Images";

export default function LoadingPage() {
	return (
		<>
			<Head>
				<title>RAJA Brawijaya 2022</title>
			</Head>
			<div className='h-screen flex justify-center items-center flex-col'>
				<div className=' w-full h-screen absolute flex-row overflow-hidden opacity-10 drop-shadow-md'>
					<Image
						src={Background.CandiHijau}
						layout='fill'
						objectFit='cover'
						alt='RAJA Brawijaya'
					/>
				</div>
				<motion.img
					src='/assets/logo/logoFull.png'
					className='h-2/5'
					animate={{
						scale: [1.2, 1, 1.2],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
					}}
				/>

				<div className='text-center text- mt-4 py-2 text-blue font-agrandir font-bold  text-2xl md:text-4xl sm:text-3xl lg:text-5xl'>
					Tau gak persamaan webnya sama dia?
					<br />
					<span className='text-orange'>sama sama lama nungguinnya</span>
				</div>
				<div className='text-blue text-center font-agrandir'>
					*Maafin yaa webnya lagi ngedown, ini lagi disemangatin sama tim IT
					biar cepet balik normal
				</div>
			</div>
		</>
	);
}
