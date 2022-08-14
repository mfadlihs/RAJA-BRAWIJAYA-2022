import { DownloadOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Header() {
	return (
		<div className='bg-green p-5 sm:p-11 rounded-lg relative flex items-center'>
			<div>
				<h2 className='h2 font-agrandir mb-16 text-white leading-snug'>
					Informasi
					<br className='md:hidden' /> Buku Panduan
					<br className='md:hidden' />
					Mahasiswa Baru
				</h2>
				<Link href='https://drive.google.com/drive/folders/1tnWpsb4nmvIswUyVa7Peu8v9qUiYtTwY'>
					<a
						href='https://drive.google.com/drive/folders/1tnWpsb4nmvIswUyVa7Peu8v9qUiYtTwY'
						target={"_blank"}
					>
						<button className='bg-yellow hover:bg-yellow flex items-center py-3 px-6 rounded-lg body text-white shadow-2xl'>
							<DownloadOutlined className='mr-3' />
							Download Buku Panduan
						</button>
					</a>
				</Link>
			</div>
			<div className='hidden md:block'>
				<img src='/assets/images/panduan.png' className='' />
			</div>
		</div>
	);
}
