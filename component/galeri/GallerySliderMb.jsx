import { GaleriImage } from "../../constants/galeri";
import style from "./style.module.css";

export default function GallerySliderMb({ reverse, start, end }) {
	return (
		<div
			className={`space-x-12 ${
				reverse ? style.slideTrackReverseMobile : style.slideTrackMobile
			} flex `}
		>
			{GaleriImage.map((item, index) => {
				if (index >= start && index <= end) {
					return (
						<div className='slider'>
							<div className='aspect-video rounded-xl shadow-2xl overflow-clip h-[100px]'>
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
							<div className='aspect-video rounded-xl shadow-2xl overflow-clip h-[100px]'>
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
