export default function Youtube({ id }: { id: string }) {
	return (
		<iframe
			title='YouTube video player'
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
			src={`https://www.youtube.com/embed/${id}`}
			className='w-full h-full '
		/>
	);
}
