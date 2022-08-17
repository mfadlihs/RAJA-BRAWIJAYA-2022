import style from "./style.module.css";
import { GaleriImage } from "../../constants/galeri";
import Image from "next/image";

export default function GallerySlider({ reverse, start, end }) {
	return (
		<div
			className={`space-y-32 ${
				reverse ? style.slideTrackReverse : style.slideTrack
			} inline-block`}
		>
			{GaleriImage.map((item, index) => {
				if (index >= start && index <= end) {
					return (
						<div className='slider'>
							<div className='aspect-[7/9] rounded-3xl shadow-2xl overflow-clip max-w-[270px]'>
								<img
									loading='lazy'
									src={item.url}
									className='object-cover w-full h-full'
								/>
							</div>
						</div>
					);
				}
			})}
			{GaleriImage.map((item, index) => {
				if (index >= start && index <= end) {
					return (
						<div className='slider'>
							<div className='aspect-[7/9] rounded-3xl shadow-2xl overflow-clip max-w-[270px]'>
								<img
									loading='lazy'
									src={item.url}
									className='object-cover w-full h-full'
								/>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
}

/*
${
				reverse ? style.slideTrackReverse : style.slideTrack
			}
*/
