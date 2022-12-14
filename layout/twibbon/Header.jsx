import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import Link from "next/link";
{
	/* <DownloadOutlined />; */
}

export default function Header() {
	const [isMan, setIsMan] = useState(true);

	return (
		<div className='p-5 sm:p-11 rounded-lg bg-green relative'>
			<div className='absolute hidden md:block -top-20 right-0'>
				<img
					src='/assets/images/twibbonHeader.svg'
					className='object-cover md:w-52 lg:w-72'
					alt='atribut header'
				/>
			</div>
			<div className='relative w-fit mx-auto -top-16 -mb-4 md:hidden'>
				<img
					src='/assets/images/twibbonHeader.svg'
					className='object-cover md:w-52 lg:w-72'
					alt='atribut header'
				/>
			</div>
			<div>
				<h2 className='h2 font-agrandir mb-16 text-white leading-snug'>
					Informasi <br className='hidden md:block' />
					Cara Penggunaan <br className='hidden md:block' /> Twibbon
				</h2>
			</div>

			<Link href='https://drive.google.com/drive/folders/1tnWpsb4nmvIswUyVa7Peu8v9qUiYtTwY'>
				<a
					href='https://drive.google.com/drive/folders/1tnWpsb4nmvIswUyVa7Peu8v9qUiYtTwY'
					target={"_blank"}
				>
					<button className='bg-yellow hover:bg-yellow flex items-center py-3 px-6 rounded-lg body text-white shadow-2xl'>
						<DownloadOutlined className='mr-3' />
						Download Twibbon
					</button>
				</a>
			</Link>
		</div>
	);
}
