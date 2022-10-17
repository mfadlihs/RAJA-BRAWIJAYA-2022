import { TabWrapper } from './style';
import type { Dispatch, ReactElement, SetStateAction } from 'react';

type TabUkmProps = {
	name: string;
	value: number;
	onChange: (value: number) => any;
	isActive: boolean;
};

export default function TabUkm({ name, value, onChange, isActive }: TabUkmProps) {
	return (
		<TabWrapper active={isActive} onClick={() => onChange(value)} className='grow pb-1 md:pb-2'>
			<p className='bodysmall sm:body'>{name}</p>
		</TabWrapper>
	);
}
