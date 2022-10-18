interface AchievmentTabProps {
	data: string;
}

export default function AchievmentTab({ data }: AchievmentTabProps) {
	return (
		<div
			data-aos='flip-left'
			dangerouslySetInnerHTML={{ __html: data }}
			className='bg-secondary achievment basis-full bodysmall font-agrandir pl-6 md:px-5 lg:px-10 py-4 rounded-lg grow text-white'
		></div>
	);
}
