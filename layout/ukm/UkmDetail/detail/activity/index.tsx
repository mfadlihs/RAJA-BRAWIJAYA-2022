import ActivityBox from './ActivityBox';
import { Activity } from '@/constants/types';

interface ActivityTabProps {
	data: Activity[];
}

export default function ActivityTab({ data }: ActivityTabProps) {
	return (
		<div className='flex gap-5 items-start'>
			{data.map((val, index) => {
				return <ActivityBox data={val} key={index} />;
			})}
		</div>
	);
}
