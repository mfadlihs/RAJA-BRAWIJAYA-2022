import { IconButton } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../../layout/nav/Nav";
import Header from "../../../layout/twibbon/Header";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useRef, useState } from "react";
export default function Index() {
	const [name, setName] = useState("");
	const [fakultas, setFakultas] = useState("");

	const captionRef = useRef(null);

	return (
		<>
			<Head>
				<title>RAJA Brawijaya 2022 | Info twibbon</title>
			</Head>
			<Nav variant='white' />

			<div
				className='after:candiHijau md:px-16 lg:px-24 relative pt-24 pb-24'
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

							<img
								src='/assets/images/feather.png'
								className='absolute bottom-0 right-0'
							/>
							<div className='opacity-0'>.</div>
						</div>
						<div className='container'>
							<div className='mb-4 sm:flex gap-2 space-y-2 sm:space-y-0'>
								<input
									placeholder='Masukkan Nama'
									onChange={e => {
										setName(e.target.value);
									}}
									className='grow twibbon w-full'
								/>
								<input
									placeholder='Masukkan Fakultas'
									onChange={e => {
										setFakultas(e.target.value);
									}}
									className='grow twibbon w-full'
								/>
							</div>
							<div className='h2 text-green relative w-min'>
								Caption
								<div className='absolute w-4/5 h-1 -bottom-2 bg-orange'></div>
							</div>
							<div
								style={{
									boxShadow: "inset 0px 8.38095px 20.9524px rgba(0, 0, 0, 0.1)",
								}}
								className='w-full h-96 sm:h-80 md:h-80 lg:h-72 rounded-3xl p-7 overflow-auto relative overflow-style'
							>
								<p ref={captionRef} className='text-justify'>
									"Cakra Manggilingan, Ngundhuh Wohing Pakerti"
									<br />
									<br /> Detik-detik perjuangan akan terus berjalan. Tawa dan air mata
									merupakan pasang surut sebuah kehidupan seperti roda yang akan selalu
									berputar. Kerendahan hati, keberanian, serta tanggung jawab akan
									membawa perubahan.
									<br />
									<br /> Semangat Brawijaya Muda dalam menggapai asa dan cita masa depan
									yang penuh karya di kampus biru, kampus perjuangan, Universitas
									Brawijaya.
									<br />
									<br /> Saya {name === "" ? "(Nama)" : name} dari{" "}
									{fakultas === "" ? "(ASAL FAKULTAS)" : fakultas} potret Abhiyaksa 59
									yang berani dan tangguh menghadapi tantangan. Siap berjuang meneruskan
									tongkat estafet kejayaan Brawijaya melalui RAJA Brawijaya Online pada
									tanggal 18-19 Agustus 2021.
									<br />
									<br />
									Leburkan asa dan karya untuk kreasi nyata Brawijaya Muda!
									<br /> Kita Satu Brawijaya!
									<br /> #Abhiyaksa59
									<br /> #MabaUB2021
									<br /> #RAJABrawijaya2021
									<br />
									#KitaSatuBrawijaya
									<br /> #AsadanKaryaBrawijaya
								</p>
								<div className='absolute top-4 right-4'>
									<IconButton>
										<ContentCopyIcon />
									</IconButton>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
