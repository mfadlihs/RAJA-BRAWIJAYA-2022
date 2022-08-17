import React, { useEffect, useState } from "react";
import Nav from "../layout/nav/Nav";
import Image from "next/image";
import { Pattern } from "../constants/Images";
import Gallery from "../layout/galeri/Gallery";
import Splash from "../layout/galeri/Splash";
import Head from "next/head";

export default function GalleryPage() {
	const [isContent, setIsContent] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsContent(true);
		}, 5000);
	}, []);

	return (
		<>
			<Head>
				<title>RAJA Brawijaya 2022 | Galeri</title>
			</Head>
			<Nav variant={"white"} />
			<div className='after:candiHijau'>
				{isContent ? <Gallery /> : <Splash />}
			</div>
		</>
	);
}
