import { IconButton } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useRef, useState } from "react";
import Nav from "../../layout/nav/Nav";
import Header from "../../layout/atribut/Header";
import Peraturan from "../../layout/atribut/Peraturan";
import { apiNews, apiNewsOnce } from "../../lib/api";
import { useRouter } from "next/router";
import FotoAtribut from "../../layout/atribut/Foto";
import SeeOther from "../../layout/adcittaInfo/SeeOther";

export default function Atribut() {
	const [name, setName] = useState("");
	const [fakultas, setFakultas] = useState("");

	// const router = useRouter();
	// const [newsOnce, setNewsOnce] = useState([]);
	// const [newsOther, setNewsOther] = useState([]);
	// const [loading, setLoading] = useState(true);

	// const captionRef = useRef(null);

	// useEffect(() => {
	// 	apiNewsOnce(slug)
	// 		.then(res => {
	// 			if (res.data) {
	// 				setNewsOnce(res.data);
	// 			} else {
	// 				router.push("/404");
	// 			}
	// 		})
	// 		.catch(err => {
	// 			router.push("/404");
	// 			console.log(err);
	// 		})
	// 		.finally(() => {
	// 			setLoading(false);
	// 		});
	// 	apiNews()
	// 		.then(res => {
	// 			setNewsOther(res.data);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		})
	// 		.finally(() => {
	// 			setLoading(false);
	// 		});
	// }, [slug]);

	return (
		<>
			<Head>
				<title>RAJA Brawijaya 2022 | Info twibbon</title>
			</Head>
			<Nav variant='white' />

			<div
				className='after:candiHijau md:px-16 lg:px-24 px-4 relative pt-24 pb-24'
				id='blog'
			>
				<div className='bg-white shadow-sm p-2 rounded-md atribut'>
					<div className=' shadow-lg py-20 rounded-md'>
						<div className='container relative'>
							<Header />
							<div className='h2 mt-8 mb-8 w-fit text-green relative '>
								<div>Atribut yang Benar</div>
								<div className='absolute w-4/5 h-1 -bottom-2 bg-orange'></div>
							</div>
							<div className='md:flex flex-row-reverse items-start mt-8 gap-6'>
								<FotoAtribut />
								<Peraturan />
							</div>
						</div>
					</div>
				</div>
				<SeeOther />
			</div>
		</>
	);
}
