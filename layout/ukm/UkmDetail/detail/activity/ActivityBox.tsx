import { Activity } from '@/constants/types';

import { useEffect } from 'react';

interface ActivityBoxProps {
	data: Activity;
}

export default function ActivityBox({ data }: ActivityBoxProps) {
	return (
		<div data-aos='flip-left' className='bg-secondary basis-full font-agrandir px-5 py-4 rounded-lg grow text-white'>
			<div className='lg:text-2xl sm:text-xl text-lg font-bold mb-2'>{data.title}</div>
			<p className='bodysmall'>{data.content}</p>
		</div>
	);
}
