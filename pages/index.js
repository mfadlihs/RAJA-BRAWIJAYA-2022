import dynamic from "next/dynamic";
import LoadingPage from "../component/LoadingPage";

const IndexRoutes = dynamic(() => import("../routes/index"), {
	loading: () => LoadingPage(),
});

export default function Home() {
	return <IndexRoutes />;
}
