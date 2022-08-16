import Head from "next/head";
import SeeOther from "../../../layout/adcittaInfo/SeeOther";
import Nav from "../../../layout/nav/Nav";
import Header from "../../../component/panduan/Header";

export default function Index() {
	return (
		<>
			<Head>
				<title>RAJA Brawijaya 2022 | Buku Panduan</title>
			</Head>

			<Nav variant='white' />
			<div
				className='after:candiHijau md:px-16 lg:px-24 relative pt-24 pb-24'
				id='blog'
			>
				<div className='bg-white'>
					<div className='shadow-lg py-20 rounded-md relative'>
						<div className='container'>
							<Header />
							<div className='h2 mb-8 text-green relative w-fit mt-8'>
								Deskripsi Buku Panduan
								<div className='absolute w-4/5 h-1 -bottom-2 bg-orange'></div>
							</div>
							<p className=''>
								Halo, Adicitta 60! Buku panduan dapat menjadi panduan bagi Mahasiswa
								Baru dalam pelaksanaan PKKMB. Buku panduan ini bertujuan untuk
								memberikan segala informasi mengenai mekanisme dan pelaksanaan PPKMB
								RAJA Brawijaya 2022. Segala informasi mengenai PKKMB dapat diakses
								Mahasiswa Baru Universitas Brawijaya.
							</p>
							<img
								src='/assets/images/Feather.png'
								className=' lg:w-1/3 w-1/2 opacity-0'
							/>
						</div>
						<img
							src='/assets/images/Feather.png'
							className='absolute bottom-10 right-0 lg:w-1/3 w-1/2'
						/>
					</div>
				</div>
				<SeeOther />
			</div>
		</>
	);
}
