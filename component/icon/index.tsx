interface IconProps {
	name: string;
	size: number;
}

export default function Icon({ name, size }: IconProps) {
	return (
		<span role='img' aria-label='environment' className='icon'>
			<img src={`/assets/icons/${name}.svg`} width={size} />
		</span>
	);
}
