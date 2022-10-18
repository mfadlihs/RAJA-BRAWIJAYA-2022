import { useEffect, useState } from "react";
import UkmDescription from "./description";
import TabUkm from "./Tab";
import ActivityTab from "./activity";
import AchievmentTab from "./achievment";
import FaqTab from "./faq";
import { motion } from "framer-motion";
import { CloudLayer, WhiteLayer } from "@/layout/ukm/style";
import Image from "next/image";
import { Ukm } from "@/constants/types";
import dummy from "../dummy.json";

export default function Detail({ data }: { data: Ukm }) {
	const [defaultTab, setDefaultState] = useState(0);

	const onChange = (value: number) => {
		setDefaultState(value);
	};

	return (
		<div className='bg-green overflow-x-hidden'>
			<CloudLayer>
				<WhiteLayer className='relative pb-20'>
					<div className='lg:px-28 md:px-24 sm:px-16 px-6 pt-24 relative z-20'>
						<h2 className='h2 text-white text-center'>{data.name}</h2>
						<img
							style={{
								filter: "drop-shadow(5px 5px 30px #d9d9d9)",
							}}
							className='my-8 mx-auto w-[200px] md:w-[300px] lg:w-[400px]'
							src={data.logo}
						/>
						<div className='flex'>
							<TabUkm
								name='Deskripsi'
								value={0}
								isActive={defaultTab == 0}
								onChange={onChange}
							></TabUkm>
							<TabUkm
								name='Kegiatan'
								value={1}
								isActive={defaultTab == 1}
								onChange={onChange}
							/>
							<TabUkm
								name='Prestasi'
								value={2}
								isActive={defaultTab == 2}
								onChange={onChange}
							/>
							<TabUkm
								name='FAQ'
								value={3}
								isActive={defaultTab == 3}
								onChange={onChange}
							/>
						</div>
						<div className='py-6'>
							{defaultTab === 0 && (
								<UkmDescription desc={data.description} pesan={data.pesan} />
							)}
							{defaultTab === 1 && <ActivityTab data={data.kegiatan} />}
							{defaultTab === 2 && <AchievmentTab data={data.prestasi} />}
							{defaultTab === 3 && <FaqTab data={data.faq} />}
						</div>
					</div>
					<img
						src='/assets/images/ukm/wave.svg'
						className='w-screen absolute z-0 bottom-0'
					/>
				</WhiteLayer>
			</CloudLayer>
		</div>
	);
}
