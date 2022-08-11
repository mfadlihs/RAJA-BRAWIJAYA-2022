import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export default function FotoAtribut() {
	const [data, setData] = useState(1);
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className='shrink-0 w-fit md:w-auto mx-auto rounded-3xl p-3 border-orange border-4'>
			<img
				src={`/assets/images/atribut${data}.svg`}
				className='object-fill mb-4 h-[420px] lg:w-[300px]'
			/>
			<div className='relative'>
				<Button
					className='bg-orange hover:bg-orange text-white flex justify-between relative'
					fullWidth
					onClick={() => {
						setIsExpanded(!isExpanded);
					}}
				>
					<div>tampak depan</div>
					<KeyboardArrowDownIcon />
				</Button>
				<div
					className={`absolute top-10 bg-yellow w-full  left-0 right-0 rounded-lg ${
						isExpanded ? "block" : "hidden"
					}`}
					onClick={() => {
						setIsExpanded(false);
					}}
				>
					<Button
						className='bg-yellow hover:bg-yellow text-white'
						onClick={() => {
							setData(1);
						}}
						fullWidth
					>
						Tampak depan
					</Button>
					<Button
						onClick={() => {
							setData(2);
						}}
						className='bg-yellow hover:bg-yellow text-white'
						fullWidth
					>
						Tampak Samping
					</Button>
					<Button
						onClick={() => {
							setData(3);
						}}
						className='bg-yellow hover:bg-yellow text-white'
						fullWidth
					>
						Tampak Belakang
					</Button>
				</div>
			</div>
		</div>
	);
}
