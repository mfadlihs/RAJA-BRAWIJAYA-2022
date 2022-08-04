import Image from "next/image";
import { Background, Pattern } from "../constants/Images";
import Link from "next/link";
export default function Custom500() {
	return (
		<div className='w-screen min-h-screen flex justify-center items-center container '>
			<div className=' w-full h-full absolute overflow-hidden opacity-10 drop-shadow-md'>
				<Image
					src={Background.CandiHijau}
					layout='responsive'
					objectFit='cover'
					alt='RAJA Brawijaya'
				/>
			</div>
			<div className='space-y-2'>
				<div className=' w-full md:w-[50vw] h-full mx-auto'>
					<Image
						src={Pattern.HeadingFull}
						layout='responsive'
						objectFit='cover'
						alt='RAJA Brawijaya'
					/>
				</div>

				<div className='drop-shadow-md'>
					<h2 className=' text-secondary font-agrandir font-extrabold text-6xl md:text-8xl text-center '>
						404
					</h2>
					<h2 className=' text-secondary font-agrandir font-extrabold text-base md:text-2xl text-center'>
						Page ini sedang dalam perbaikan. Dimohon untuk kembali lagi di lain
						waktu! balik ke{" "}
						<Link href='/'>
							<span className='!text-primary underline cursor-pointer'>
								landing page
							</span>
						</Link>
					</h2>
				</div>
				<div className='w-full md:w-[50vw] h-full mx-auto rotate-180 drop-shadow-md'>
					<Image
						src={Pattern.HeadingFull}
						layout='responsive'
						objectFit='cover'
						alt='RAJA Brawijaya'
					/>
				</div>
			</div>
		</div>
	);
}
