import { FaqUkm } from "@/constants/types";
import { Icon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

interface FaqBoxProps {
	data: FaqUkm;
}

export default function FaqBox({ data }: FaqBoxProps) {
	const [expand, setExpand] = useState(false);

	return (
		<div
			className={`cursor-pointer ease-in ${
				expand && "bg-ukm"
			} rounded-lg bg-opacity-80 ${expand && "py-4"}`}
			onClick={() => {
				setExpand(!expand);
			}}
		>
			<div
				className={`${expand ? "bg-transparent" : "bg-secondary"} ${
					!expand ? "py-5" : "py-0"
				} px-4 flex justify-between rounded-lg  text-white`}
			>
				<div className={`body ${expand && "font-bold"}`}>{data.question}</div>
				{!expand && <AddIcon fontSize='large' />}
			</div>
			<div
				className={`px-4 bodysmall ${
					expand ? "block" : "hidden"
				} text-white text-justify`}
			>
				{data.answer}
			</div>
		</div>
	);
}
