import { useRouter } from "next/dist/client/router";
import { Background, Pattern } from "../../../constants/Images";
import Image from "next/dist/client/image";
import Nav from "../../../layout/nav/Nav";
import Head from "next/dist/shared/lib/head";
import AdicittaCard from "../../../layout/adcittaInfo/AdicittaCard";
import HeadingMini from "../../../component/heading/HeadingMini";
import AdicittaCardMini from "../../../layout/adcittaInfo/AdicittaCardMini";
import AdicittaCardFull from "../../../layout/adcittaInfo/AdicittaCardFull";
import { useEffect, useState } from "react";
import { apiNews, apiNewsOnce } from "../../../lib/api";

export default function Index() {
	const router = useRouter();
	const [newsOnce, setNewsOnce] = useState([]);
	const [newsOther, setNewsOther] = useState([]);
	const [loading, setLoading] = useState(true);
	const { slug } = router.query;
	console.log(slug);

	// useEffect(async () => {
	// 	if (slug != null) {
	// 		if (!(slug == "twibbon" || slug == "atribut")) {
	// 			router.push("/404");
	// 		}
	// 	}
	// });

	useEffect(() => {
		apiNewsOnce(slug)
			.then(res => {
				if (res.data) {
					setNewsOnce(res.data);
				} else {
					router.push("/404");
				}
			})
			.catch(err => {
				router.push("/404");
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
		apiNews()
			.then(res => {
				setNewsOther(res.data);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [slug]);
	const date = date => {
		const dateSplit = date.split("-");
		const year = dateSplit[0];
		const month = dateSplit[1];
		let day = dateSplit[2];
		day = day.split("T")[0];
		return `${day}-${month}-${year}`;
	};
	return (
		<>
			<Head>
				<title>RAJA Brawijaya 2022 | Adiciitta Info</title>
			</Head>

			<Nav variant='white' />

			<div className='after:candiHijau relative pt-24 pb-20' id='blog'>
				<div>
					<div className='container pt-20 '>
						<div className='flex lg:flex-row flex-col lg:space-x-5 h-full items-center pt-5 '>
							<AdicittaCardFull
								title={newsOnce.title}
								descipriton={newsOnce.description}
								slug='twibbon'
							/>
						</div>
					</div>
					<div className='container pt-20  '>
						<HeadingMini top={"Lihat"} bottom=' Lainya' />
						<div className='flex md:flex-row flex-col  md:space-x-5 h-full items-center pt-5 '>
							<div className='flex-1  md:space-y-2 items-between  justify-between flex '>
								{newsOther.map((item, index) => {
									if (index < 3) {
										return (
											<div className='md:w-1/3 md:h-1/3'>
												<AdicittaCardMini
													title={item.title}
													descipriton={item.description}
													thumbnail={item.thumbnail}
													slug={item.slug}
													tanggal={date(item.created_at)}
												/>
											</div>
										);
									}
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
