import { motion } from 'framer-motion';

interface UkmDescriptionProps {
	desc: string;
	pesan: string;
}

export default function UkmDescription({ desc, pesan }: UkmDescriptionProps) {
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: desc }} className='whitespace-pre-line bodysmall text-white ' />
			<br />
			<div dangerouslySetInnerHTML={{ __html: pesan }} className='whitespace-pre-line bodysmall text-white ' />
		</div>
	);
}
