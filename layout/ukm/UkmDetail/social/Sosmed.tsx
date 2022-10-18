import Icon from "@/component/icon";
import { Ukm } from "@/constants/types";

interface SosmedProps {
	icon: string;
	name: string;
}

export default function Sosmed({ icon, name }: SosmedProps) {
	return (
		<div className='flex gap-3 items-center'>
			<Icon className='w-8 sm:w-10 md:w-11 lg:w-12' name={icon} />
			<div className='bodysmall text-white '>{name}</div>
		</div>
	);
}
