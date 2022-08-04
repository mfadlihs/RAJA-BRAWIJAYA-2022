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
			<div className='h-screen flex justify-center items-center '>
				<div className=' w-full h-full absolute overflow-hidden opacity-10 drop-shadow-md'>
					<Image
						src={Background.CandiHijau}
						layout='responsive'
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
			</div>
		</>
	);
}
