import Icon from '@/component/icon';
import { Ukm } from '@/constants/types';

interface SosmedProps {
	icon: string;
	name: string;
}

export default function Sosmed({ icon, name }: SosmedProps) {
	return (
		<div className='flex gap-3 items-center'>
			<Icon name={icon} size={50} />
			<div className='bodysmall text-white'>{name}</div>
		</div>
	);
}
