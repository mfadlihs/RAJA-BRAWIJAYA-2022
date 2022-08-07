import { useState } from "react";
import style from "./style.module.css";
import Image from "next/dist/client/image";

import Item from "./Item";
import GallerySlider from "../../component/galeri/GallarySlider";
import { Pattern } from "../../constants/Images";

export default function Gallery() {
	const [isVideo, setIsVideo] = useState(true);

	return (
		<div>
			<div className='md:hidden'>
				<div className='max-w-md sm:mb-2 mb-1 md:mb-4 mx-auto drop-shadow-md'>
					<Image
						src={Pattern.HeadingFull}
						layout='responsive'
						objectFit='cover'
						alt='RAJA Brawijaya'
					/>
				</div>
				<div className='font-agrandir font-bold md:text-6xl sm:text-3xl  text-2xl lg:text-8xl text-center text-blue'>
					Galeri <span className='text-orange'>RAJA Brawijaya</span>
				</div>
				<div className='max-w-md sm:mt-2 mb-1 md:mt-4  mx-auto drop-shadow-md rotate-180'>
					<Image
						src={Pattern.HeadingFull}
						layout='responsive'
						objectFit='cover'
						alt='RAJA Brawijaya'
					/>
				</div>
			</div>
			<div className='md:flex block h-screen w-screen overflow-hidden px-24'>
				<div className='flex flex-col justify-between md:h-full md:py-16 '>
					<div className='flex justify-center grow md:items-center'>
						<div className='flex items-center gap-5'>
							<Item active={isVideo} setIsVideo={setIsVideo} video={true}>
								Video
							</Item>
							<div className='w-4 h-4 bg-blue rounded-full'></div>
							<Item active={!isVideo} setIsVideo={setIsVideo} video={false}>
								Foto
							</Item>
						</div>
					</div>
					<div className='hidden md:block font-agrandir text-3xl font-normal'>
						Video rangkaian acara
						<br />
						RAJA Brawijaya 2022
					</div>
				</div>
				<div className='grow'>
					<div className='h-full overflow-hidden'>
						<div className='w-fit space-x-20 mx-auto'>
							<GallerySlider />
							<GallerySlider reverse />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

/*
<div className={`w-32 space-y-[20px] ${style.slideTrack}`}>
						<div className='slider'>
							<div className='w-32 h-32 bg-blue' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-slate-600' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-yellow' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-gray-900' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-zinc-700' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-stone-500' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-red-400' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-lime-600' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-amber-500' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-emerald-500' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-blue' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-slate-600' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-yellow' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-gray-900' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-zinc-700' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-stone-500' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-red-400' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-lime-600' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-amber-500' />
						</div>
						<div className='slider'>
							<div className='w-32 h-32 bg-emerald-500' />
						</div>
					</div>
*/
