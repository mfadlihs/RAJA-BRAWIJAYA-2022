import Adicitta from '../layout/adicitta/Adicitta';
import Jumbotron from '../layout/jumbotron/Jumbotron';
import Nav from '../layout/nav/Nav';
import Perkenalan from '../layout/perkenalan/Perkenalan';
import Sekilas from '../layout/sekilas/Sekilas';
import Rangkaian from '../layout/rangkaian/Rangkaian';
import Pkmaba from '../layout/pkmaba/Pkmaba';
import Logo from '../layout/logo/Logo';
import { useContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Footer from '../layout/footer/Footer';
import { ukm } from '../api/ukm';

export default function Home() {
	return (
		<div className='overflow-x-hidden'>
			<Head>
				<title>Raja Brawijaya 2022</title>
			</Head>
			<Nav variant='blue' />
			<Jumbotron />
			<Perkenalan />
			<Adicitta />
			<Logo />
			<Sekilas />
			<Rangkaian />
			<Pkmaba />
			<Footer />
		</div>
	);
}
