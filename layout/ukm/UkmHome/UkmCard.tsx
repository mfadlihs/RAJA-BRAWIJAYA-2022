import { Ukm } from "@/constants/types";
import Link from "next/link";

interface UkmCardProps {
	isActive: boolean;
	val: Ukm;
}

export default function UkmCard({ isActive, val }: UkmCardProps) {
	const { image } = val;

	return (
		<Link
			href={isActive ? `/ukm/${val.slug}` : ""}
			scroll={false}
			className={"px-2"}
		>
			<a>
				<div
					className='bg-gray-400 h-full shadow-xl aspect-video flex items-center justify-center rounded-lg overflow-hidden'
					style={{
						transition: "background 2s",
						background: isActive
							? `linear-gradient(0deg, rgba(62, 134, 120, 0.6), rgba(62, 134, 120, 0.6)), url(${image[0]})`
							: `linear-gradient(0deg, rgba(241, 130, 3, 0.6), rgba(241, 130, 3, 0.6)), url(${image[0]})`,
						boxShadow: "0px 2px 10px 1px #333333",
					}}
				>
					<p className='font-agrandir text-center text-white md:text-4xl text-2xl lg:text-7xl'>
						{val.name}
					</p>
				</div>
			</a>
		</Link>
	);
}
