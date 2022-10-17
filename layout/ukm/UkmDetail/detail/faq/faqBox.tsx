import { FaqUkm } from "@/constants/types";
import { Icon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface FaqBoxProps {
	data: FaqUkm;
}

export default function FaqBox({ data }: FaqBoxProps) {
	return (
		<div className='cursor-pointer'>
			<div className='bg-secondary py-5 px-4 flex justify-between rounded-lg text-white'>
				<div className='body'>{data.question}</div>
				<div>
					<AddIcon fontSize='large' />
				</div>
			</div>
		</div>
	);
}
