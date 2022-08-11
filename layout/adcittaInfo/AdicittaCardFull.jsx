import style from "./style.module.css";
import { SendOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Background, Icons } from "../../constants/Images";

export default function AdicittaCardFull({
	tanggal,
	slug,
	title,
	descipriton,
}) {
	return (
		<div className='p-5 rounded-lg bg-white shadow-sm bg-opacity-50 w-full '>
			<div
				className={`rounded-lg bg-white ${style.addicitaCard} pb-5 bg-opacity-30  relative `}
			>
				<div className=' p-8 lg:p-20 '>
					<div className='bg-green p-5 rounded-lg mb-5 '>
						<h1 className='text-3xl text-white font-semibold  '>{title}</h1>
					</div>
					<div dangerouslySetInnerHTML={{ __html: descipriton }}></div>
				</div>
				<div className='flex justify-end'>
					<div className=' w-1/2 h-auto'>
						<Image
							src={Background.Feather}
							layout='responsive'
							objectFit='cover'
							alt='RAJA Brawijaya'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
