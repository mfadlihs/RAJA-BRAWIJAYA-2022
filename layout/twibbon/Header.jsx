import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
{
	/* <DownloadOutlined />; */
}

export default function Header() {
	const [isMan, setIsMan] = useState(true);

	return (
		<div className='p-11 rounded-lg bg-green relative'>
			<div className='absolute top-0 right-0 aspect-square h-full'>
				<img src='/assets/images/atributHeader.png' alt='atribut header' />
			</div>
			<div>
				<h2 className='font-agrandir mb-16 text-white text-5xl leading-snug'>
					Informasi
					<br />
					Cara Penggunaan
					<br />
					Twibbon
				</h2>
			</div>
			<button className='bg-yellow flex items-center py-3 px-6 rounded-lg body text-white shadow-2xl'>
				<DownloadOutlined className='mr-3' />
				Download Twibbon
			</button>
		</div>
	);
}
