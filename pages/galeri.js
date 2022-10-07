import dynamic from "next/dynamic";

const GalleryRoutes = dynamic(() => import("../routes/galeri"), {
	loading: () => LoadingPage(),
});

export default function Gallery() {
	return <GalleryRoutes />;
}
