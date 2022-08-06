import style from "./style.module.css";

export default function Item({ children, active }) {
	return (
		<div className=''>
			<div
				className={`font-agrandir text-blue font-normal relative
        ${style.text}
      ${active ? "text-9xl" : "text-5xl"}
      ${active && style.active}
    `}
			>
				{children}
			</div>
			{/* {active && (
				<div
					className={`w-[80%] h-2 ease-in duration-700 bg-orange mx-auto rounded-lg `}
				></div>
			)} */}
		</div>
	);
}
