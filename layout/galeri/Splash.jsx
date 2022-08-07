import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { Pattern } from "../../constants/Images";

export default function Splash() {
	useEffect(() => {
		Aos.init();
		Aos.refresh();
	}, []);
	return (
		<div className='h-screen relative flex justify-center items-center flex-col w-full'>
			<div className='md:w-[80vw] w-[85%] sm:mb-4 mb-2 md:mb-8 mx-4 md:mx-auto drop-shadow-md'>
				<Image
					src={Pattern.HeadingFull}
					layout='responsive'
					data-aos='zoom-in'
					data-aos-duration='3000'
					objectFit='cover'
					alt='RAJA Brawijaya'
				/>
			</div>
			<div
				data-aos='zoom-in'
				className='font-agrandir font-bold md:text-6xl sm:text-5xl text-3xl lg:text-8xl text-center text-blue'
				data-aos-duration='3000'
			>
				Galeri <span className='text-orange'>RAJA Brawijaya</span>
			</div>
			<div className='md:w-[80vw] w-[85%] sm:mt-4 mb-2 md:mt-8 mx-4 md:mx-auto drop-shadow-md rotate-180'>
				<Image
					src={Pattern.HeadingFull}
					data-aos-duration='3000'
					data-aos='zoom-in'
					layout='responsive'
					objectFit='cover'
					alt='RAJA Brawijaya'
				/>
			</div>
		</div>
	);
}
