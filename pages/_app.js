import { useEffect, useRef } from "react";
import "../style/globals.css";
import "../style/swiperstyle.css";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
