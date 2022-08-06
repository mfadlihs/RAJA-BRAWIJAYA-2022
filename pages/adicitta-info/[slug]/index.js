import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Index() {
	const router = useRouter();

	const { slug } = router.query;

	useEffect(async () => {
		if (slug != null) {
			if (!(slug == "twibbon" || slug == "atribut")) {
				router.push("/404");
			}
		}
	});

	return <div>ini twibbon</div>;
}
