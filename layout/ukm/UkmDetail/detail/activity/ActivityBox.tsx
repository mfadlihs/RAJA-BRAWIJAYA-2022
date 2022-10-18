import { Activity } from "@/constants/types";

import { useEffect } from "react";

interface ActivityBoxProps {
	data: Activity;
}

export default function ActivityBox({ data }: ActivityBoxProps) {
	return (
		<>
			{data.head === null || data.body === null ? (
				<></>
			) : (
				<div className='bg-secondary basis-full font-agrandir px-5 py-4 rounded-lg grow text-white'>
					<div className='lg:text-2xl sm:text-xl text-lg font-bold mb-2'>
						{data.head}
					</div>
					<p className='bodysmall'>{data.body}</p>
				</div>
			)}
		</>
	);
}
