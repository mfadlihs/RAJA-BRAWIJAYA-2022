import React from "react";
import Link from "next/link";
import style from "./navlink.module.css";
import { useRouter } from "next/router";
// import {motion} from 'framer-motion'

export default function Navlink({ To, children, variant, show }) {
	const router = useRouter();

	return (
		<Link href={To}>
			<a
				className={`font-agrandir whitespace-nowrap ${
					variant == "white" && !show ? "text-blue" : "text-white"
				} my-4 lg:my-0 relative font-semibold ${style.a} ${
					router.pathname == To ? style.active : " "
				}`}
			>
				{children}
			</a>
		</Link>
	);
}
