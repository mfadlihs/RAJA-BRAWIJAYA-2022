import dynamic from "next/dynamic";
import Nav from "@/layout/nav/Nav";
import LoadingPage from "@/component/LoadingPage";

const UkmDetailRoutes = dynamic(() => import("@/routes/ukm/[detail]"), {
	loading: () => <LoadingPage />,
});

export default function UkmDetail() {
	return <UkmDetailRoutes />;
}
