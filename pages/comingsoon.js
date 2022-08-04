import Image from "next/image";
import { Background, Pattern } from "../constants/Images";
import Link from "next/link";
import { SosialMedia } from "../constants/Dummy";
import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import LoadingPage from "../component/LoadingPage";

const ComingSoonAsync = dynamic(() => import("../routes/comingsoon"), {
	loading: () => <LoadingPage />,
});

export default function ComingSoon() {
	return <ComingSoonAsync />;
}
