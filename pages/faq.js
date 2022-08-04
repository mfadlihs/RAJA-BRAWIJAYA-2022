import dynamic from "next/dynamic";
import LoadingPage from "../component/LoadingPage";

const FaqRoutes = dynamic(() => import("../routes/faq"), {
	loading: () => <LoadingPage />,
});

export default function Faq() {
	return <FaqRoutes />;
}
