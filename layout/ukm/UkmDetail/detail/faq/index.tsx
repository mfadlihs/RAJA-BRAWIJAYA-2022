import { FaqUkm } from '@/constants/types';
import FaqBox from './faqBox';

interface FaqTabProps {
	data: FaqUkm[];
}

export default function FaqTab({ data }: FaqTabProps) {
	return (
		<div className='gap-3 flex flex-col'>
			{data.map((val, index) => {
				return <FaqBox data={val} key={index} />;
			})}
		</div>
	);
}
