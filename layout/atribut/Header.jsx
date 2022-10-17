import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
{
	/* <DownloadOutlined />; */
}

export default function Header() {
	const [isMan, setIsMan] = useState(isMan);

	return (
		<div className='p-5 sm:p-11 rounded-lg bg-green relative'>
			<div className='hidden lg:block absolute top-0 right-0 aspect-square h-full'>
				<img src='/assets/images/atributHeader.png' alt='atribut header' />
			</div>
			<div>
				<h2 className='h2 font-agrandir mb-16 text-white leading-snug'>
					Informasi
					<br />
					Atribut Peserta
					<br />
					RAJA Brawijaya
				</h2>
			</div>
			<div className='bg-orange w-fit hover:bg-orange flex items-center rounded-lg body text-white shadow-2xl'>
				{/* <DownloadOutlined className='mr-3' />
				Download Twibbon */}
				<button
					className={`py-3 px-6 text-white rounded-lg ${
						isMan && "bg-yellow hover:bg-yellow"
					}`}
					sx={{
						boxShadow: "inset 0px 8.38095px 20.9524px rgba(0, 0, 0, 0.1)",
					}}
					onClick={() => {
						setIsMan(true);
					}}
				>
					Laki-Laki
				</button>
				<button
					className={`py-3 px-6 text-white rounded-lg ${
						!isMan && "bg-yellow hover:bg-yellow"
					}`}
					onClick={() => {
						setIsMan(false);
					}}
				>
					Perempuan
				</button>
			</div>
		</div>
	);
}
