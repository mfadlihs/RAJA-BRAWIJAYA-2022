import ActivityBox from "./ActivityBox";
import { Activity } from "@/constants/types";
import style from "./style.module.css";
import { useMemo } from "react";

export default function ActivityTab({
	data: activityData,
}: {
	data: Activity[];
}) {
	const data = useMemo(() => {
		const dataTemp: Activity[] = [];
		activityData.forEach(val => {
			if (val.head !== null && val.body !== null) dataTemp.push(val);
		});
		return dataTemp;
	}, [activityData]);

	return (
		<div className={` overflow-y-auto scrollbar p-1 max-h-96`}>
			<div
				className={`grid gap-5 grid-cols-1 sm:grid-cols-2 ${
					data.length > 2 && "lg:grid-cols-3"
				} items-start`}
			>
				{data.map((val, index) => {
					return <ActivityBox data={val} key={index} />;
				})}
			</div>
		</div>
	);
}
