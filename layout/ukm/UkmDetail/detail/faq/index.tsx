import { FaqUkm } from "@/constants/types";
import { useMemo } from "react";
import FaqBox from "./faqBox";

interface FaqTabProps {
	data: FaqUkm[];
}

export default function FaqTab({ data: faqData }: FaqTabProps) {
	const data = useMemo(() => {
		const dataTemp: FaqUkm[] = [];

		faqData.forEach(val => {
			if (val.answer !== null && val.question !== null) {
				dataTemp.push(val);
			}
		});
		return dataTemp;
	}, [faqData]);

	return (
		<div className='gap-3 flex flex-col'>
			{data.map((val, index) => {
				return <FaqBox data={val} key={index} />;
			})}
		</div>
	);
}
