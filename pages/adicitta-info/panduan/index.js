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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mi mauris
								vulputate in amet natoque malesuada id. Felis tellus sed mauris posuere
								convallis. Ut arcu ridiculus at luctus tellus. Dolor quis ipsum hac mi
								at dictumst. Leo bibendum tincidunt varius sit eget. Arcu suspendisse
								dui lacus venenatis fames vestibulum ullamcorper nisi. A eget sed tortor
								nibh id. Tortor a malesuada scelerisque amet. Cras tellus in placerat
								risus, urna interdum pretium venenatis velit. Urna, tristique phasellus
								nulla rutrum volutpat id morbi neque. Viverra egestas nisi sed integer
								lacus, magna erat.
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
