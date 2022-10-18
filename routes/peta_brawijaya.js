import Image from "next/image";
import Nav from "../layout/nav/Nav";
import Head from "next/head";
import { useState } from "react";
import Dropdown from "../component/peta/Dropdown";
import Heading from "../component/heading/Heading";
import dataMap from "../constants/dataMap";

const getSelectData = p => {
	return dataMap.filter(e => {
		return e.id == p;
	})[0];
};

export default function PetaBrawijaya() {
	const [active, setActive] = useState(false);
	const [select, setSelect] = useState(1);

	return (
		<div>
			<Head>
				<title>RAJA Brawijaya 2022 | Peta Brawijaya</title>
			</Head>
			<div className={`bg-white min-h-screen relative`}>
				<Nav variant={"white"} />

				<div className='container mx-auto py-24 relative z-3'>
					<Heading top={"Raja"} bottom='Brawijaya' direction={"center"} />

					<div className='w-full mt-10 bg-green h-fit p-6 rounded-lg flex flex-col md:flex-row'>
						<div className='w-4/5 mx-auto relative aspect-square select-none mb-10 md:full'>
							<Image
								src={"/assets/images/map.png"}
								layout={"responsive"}
								width={1}
								height={1}
							/>
						</div>
						<div className='md:w-3/5'>
							<button
								className='bg-yellow rounded-[10px] relative text-sm hover:bg-yellow w-full py-3 px-4 font-poppins text-white'
								onClick={() => {
									setActive(!active);
								}}
							>
								<div className='flex justify-between items-center w-full normal-case'>
									<p className='text-start'>{`${getSelectData(select).id}. ${
										getSelectData(select).nama
									}`}</p>
									<img
										src='/assets/icons/arrdown.svg'
										width={20}
										className='mt-1'
									/>
								</div>
							</button>
							<Dropdown
								active={active}
								setActive={setActive}
								data={dataMap}
								select={e => {
									setSelect(e);
								}}
							/>
							<p className='text-white mt-4 font-poppins'>
								{getSelectData(select).deskripsi}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
