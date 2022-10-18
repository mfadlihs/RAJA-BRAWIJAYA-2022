import Image from "next/image";

interface IconProps {
	name: string;
	size?: number;
	className?: string;
}

export default function Icon({ name, size, className }: IconProps) {
	return (
		<span role='img' aria-label='environment' className={`icon ${className}`}>
			<img src={`/assets/icons/${name}.svg`} width={size} />
		</span>
	);
}
