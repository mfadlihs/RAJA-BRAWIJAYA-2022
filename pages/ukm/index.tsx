import LoadingPage from "@/component/LoadingPage";
import dynamic from "next/dynamic";
import React from "react";

const UkmHomeRoutes = dynamic(() => import("@/routes/ukm"), {
	loading: () => <LoadingPage />,
});

function UkmPages() {
	return <UkmHomeRoutes />;
}

export default UkmPages;
