import style from "./style.module.css";

export default function Item({ children, active, setIsVideo, video }) {
	return (
		<div
			className=''
			onClick={() => {
				setIsVideo(video);
			}}
		>
			<div
				className={`font-agrandir text-blue font-normal relative cursor-pointer ${
					style.text
				} ${
					active
						? "lg:text-9xl md:text-7xl sm:text-6xl text-5xl "
						: "lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
				} ${active && style.active}
    `}
			>
				{children}
			</div>
		</div>
	);
}
