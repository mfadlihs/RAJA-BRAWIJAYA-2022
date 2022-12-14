import React from "react";

export default function Pkdata({
	name,
	line,
	img,
	instagram,
	twitter,
	telegram,
	tiktok,
	youtube,
	spotify,
	description,
}) {
	return (
		<>
			<div className='container mx-auto md:flex lg:mt-16'>
				<div className='pt-10'>
					<div className='rounded-full h-32 w-32 md:h-56 p-2 md:p-8 lg:p-20 md:w-56 lg:w-[500px] lg:h-[500px] md:mr-10 lg:mr-14 bg-white mx-auto'>
						<img
							src={img}
							className='rounded-full object-cover object-center'
							alt=''
						/>
					</div>
				</div>
				<div>
					<h2 className='text-grey text-center md:text-start text-4xl lg:text-6xl font-agrandir font-semibold mt-8 md:mt-12'>
						{name}
					</h2>
					<p
						className='text-white text-justify font-poppins mt-4 lg:text-xl lg:mt-6'
						dangerouslySetInnerHTML={{ __html: description }}
					></p>
				</div>
			</div>
			<div className='flex flex-wrap w-2/3 justify-center mx-auto mt-6 lg:mt-16'>
				{line != null && (
					<a target='_blank' href={line}>
						<img
							className='w-10 lg:w-14 m-1'
							src='/assets/icons/li.svg'
							alt=''
						/>
					</a>
				)}
				{instagram != null && (
					<a target='_blank' href={instagram}>
						<img
							className='w-10 lg:w-14 m-1'
							src='/assets/icons/ig.svg'
							alt=''
						/>
					</a>
				)}
				{twitter != null && (
					<a target='_blank' href={twitter}>
						<img
							className='w-10 lg:w-14 m-1'
							src='/assets/icons/tw.svg'
							alt=''
						/>
					</a>
				)}
				{telegram != null && (
					<a target='_blank' href={telegram}>
						<img
							className='w-10 lg:w-14 m-1'
							src='/assets/icons/tel.svg'
							alt=''
						/>
					</a>
				)}
				{tiktok != null && (
					<a target='_blank' href={tiktok}>
						<img
							className='w-10 lg:w-14 m-1'
							src='/assets/icons/tik.svg'
							alt=''
						/>
					</a>
				)}
				{youtube != null && (
					<a target='_blank' href={youtube}>
						<img
							className='w-10 lg:w-14 m-1'
							src='/assets/icons/yt.svg'
							alt=''
						/>
					</a>
				)}
				{spotify != null && (
					<a target='_blank' href={spotify}>
						<img
							className='w-10 lg:w-14 m-1'
							src='/assets/icons/spo.svg'
							alt=''
						/>
					</a>
				)}
			</div>
		</>
	);
}
