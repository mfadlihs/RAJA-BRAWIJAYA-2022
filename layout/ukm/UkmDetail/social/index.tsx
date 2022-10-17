import Icon from '@/component/icon';
import { Ukm } from '@/constants/types';
import data from '../dummy.json';
import Sosmed from './Sosmed';

export default function UkmSocial({ data }: { data: Ukm }) {
	return (
		<div>
			<h3 className='h3 text-white mb-6'>Media Sosial</h3>
			<div className='gap-3 flex flex-col'>
				<Sosmed icon='ukm-ig' name={data.instagram} />
				<Sosmed icon='ukm-line' name={data.line} />
				<Sosmed icon='ukm-zoom' name={data.zoom_link} />
				<Sosmed icon='ukm-web' name={data.email} />
			</div>
		</div>
	);
}
