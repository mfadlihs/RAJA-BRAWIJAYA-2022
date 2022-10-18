import { ukm } from "@/api/ukm";
import LoadingPage from "@/component/LoadingPage";
import { detailType } from "@/constants/types";
import Nav from "@/layout/nav/Nav";
import { url } from "@/lib/api";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import Detail from "./detail";
import UkmGallery from "./gallery";
import UkmSocial from "./social";

function UkmDetail() {
	const router = useRouter();
	const { detail: slug } = router.query;

	const ukmData = useContext(ukm);

	const { detail } = ukmData;

	const data = useMemo(() => {
		if (detail === null) return null;
		return detail[slug as keyof detailType];
	}, [detail]);

	return data ? (
		<>
			<div className='bg-ukm h-screen'>
				<Nav variant='white' trans={true} />
				<Detail data={data} />
				<div className='bg-ukm -mt-4 pt-4 lg:px-28 md:px-24 sm:px-16 px-6 pb-16'>
					<UkmGallery data={data} />
					<UkmSocial data={data} />
				</div>
			</div>
		</>
	) : (
		<LoadingPage />
	);
}

export default UkmDetail;
