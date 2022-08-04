import dynamic from "next/dynamic";
import LoadingPage from "../component/LoadingPage";

const PetaBrawijayaAsync = dynamic(import("../routes/peta_brawijaya"), {
	loading: () => <LoadingPage />,
});

export default function PetaBrawijaya() {
	return <PetaBrawijayaAsync />;
}
