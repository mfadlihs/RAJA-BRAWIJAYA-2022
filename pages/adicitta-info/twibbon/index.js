import Head from "next/head";
import Image from "next/image";
import Nav from "../../../layout/nav/Nav";
import Header from "../../../layout/twibbon/Header";

export default function Index() {
	return (
		<>
			<Head>
				<title>RAJA Brawijaya 2022 | Info twibbon</title>
			</Head>
			<Nav variant='white' />
			<div
				className='after:candiHijau md:px-16 lg:px-24 relative pt-24 pb-20 h-screen'
				id='blog'
			>
				<div className='bg-white shadow-sm p-2 rounded-md'>
					<div className=' shadow-lg py-20 rounded-md'>
						<div className='container relative'>
							<Header />
							<p className='mt-8 mb-28'>
								Halo Adiccita 60!
								<br />
								<br />
								Ayo ikut ramaikan kegiatan RAJA BRAWIJAYA 2022 dengan mengunduh twibbon
								yang telah tersedia dan mengunggah di akun instagram kalian
								masing-masing ya!!
							</p>
							<div className='opacity-0'>.</div>
							<img
								src='/assets/images/feather.png'
								className='absolute bottom-0 right-0'
							/>
						</div>
						<div className='container'>
							<div className='h2 text-green relative w-min'>
								Caption
								<div className='absolute w-4/5 h-1 -bottom-2 bg-orange'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
