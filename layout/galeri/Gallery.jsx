import Item from "./Item";

export default function Gallery() {
	return (
		<div className='flex h-screen w-screen overflow-hidden flex cursor-pointer'>
			<div className='flex flex-col justify-between h-full py-16'>
				<div className='flex justify-center grow items-center'>
					<div className='flex items-center gap-5'>
						<Item active>Video</Item>
						<div className='w-4 h-4 bg-blue rounded-full'></div>
						<Item>Foto</Item>
					</div>
				</div>
				<div>asd</div>
			</div>
		</div>
	);
}
