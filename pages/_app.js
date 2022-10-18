import { useEffect, useMemo, useRef } from "react";
import "../style/globals.css";
import "swiper/css";
import "../style/swiperstyle.css";
import { ProviderUkm } from "@/api/ukm";
import "aos/dist/aos.css";
import Aos from "aos";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init();
		Aos.refresh();
	}, []);

	return (
		<ProviderUkm>
			<div>
				<Component {...pageProps} />
			</div>
		</ProviderUkm>
	);
}

export default MyApp;
