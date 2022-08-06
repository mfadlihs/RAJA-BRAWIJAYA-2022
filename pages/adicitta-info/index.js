import { Background, Pattern } from "../../constants/Images";
import Image from "next/dist/client/image";
import Nav from "../../layout/nav/Nav";
import Head from "next/dist/shared/lib/head";
import AdicittaCard from "../../layout/adcittaInfo/AdicittaCard";

export default function AdiciittaInfo() {
	const x = "asd<br />asd";

	return (
		<>
			<Head>
				<title>RAJA Brawijaya 2022 | Adiciitta Info</title>
			</Head>

			<Nav variant='white' />

			<div className='after:candiHijau relative pt-24'>
				<div>
					<div className='md:w-[50vw] h-full mx-4 md:mx-auto'>
						<Image
							src={Pattern.HeadingFull}
							layout='responsive'
							objectFit='cover'
							alt='RAJA Brawijaya'
						/>
					</div>
					<h1 className='text-center py-2 text-blue font-agrandir font-bold font-agrandir font-bold text-3xl lg:text-[4rem] md:text-5xl'>
						Adiciitta <span className='text-orange'>Info</span>
					</h1>
					<div className='rotate-180 mx-4 md:w-[50vw] h-full md:mx-auto'>
						<Image
							src={Pattern.HeadingFull}
							layout='responsive'
							objectFit='cover'
							alt='RAJA Brawijaya'
						/>
					</div>
					<div>
						<AdicittaCard />
					</div>
				</div>
			</div>
		</>
	);
}
