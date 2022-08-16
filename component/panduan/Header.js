import { DownloadOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Header() {
	return (
		<div className='bg-green p-5 sm:p-11 rounded-lg relative flex items-center'>
			<div>
				<h2 className='h2 font-agrandir mb-16 text-white leading-snug'>
					Informasi
					<br className='md:block hidden' /> Buku Panduan
					<br className='md:block hidden' />
					Mahasiswa Baru
				</h2>
				<Link href='https://drive.google.com/file/d/1jImXjgy01nsCe2jIXGx8SwCU6XYwPDXn/view?usp=sharing'>
					<a
						href='https://drive.google.com/file/d/1jImXjgy01nsCe2jIXGx8SwCU6XYwPDXn/view?usp=sharing'
						target={"_blank"}
					>
						<button className='bg-yellow hover:bg-yellow flex items-center py-3 px-6 rounded-lg body text-white shadow-2xl'>
							<DownloadOutlined className='mr-3' />
							Download Buku Panduan
						</button>
					</a>
				</Link>
			</div>
			<div className='hidden md:block absolute w-[60%] -right-5 -top-10'>
				<img src='/assets/images/panduan.png' className='' />
			</div>
		</div>
	);
}
