import { useEffect, useRef } from "react";
import "../style/globals.css";
import "../style/swiperstyle.css";

function MyApp({ Component, pageProps }) {
	const musicRef = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			musicRef.current.play();
		}, 1000);
	}, []);
	return (
		<div>
			<audio
				ref={musicRef}
				autoPlay
				hidden
				src='/assets/sound/jingle.mp3'
			></audio>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
