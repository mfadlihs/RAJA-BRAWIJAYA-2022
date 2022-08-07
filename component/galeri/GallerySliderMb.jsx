import style from "./style.module.css";

export default function GallerySliderMb({ reverse }) {
	return (
		<div
			className={`w-full ${
				reverse ? style.slideTrackReverseMobile : style.slideTrackMobile
			} flex `}
		>
			<div className='slider'>
				<div className='w-32 h-32 bg-blue' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-slate-600' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-yellow' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-gray-900' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-zinc-700' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-stone-500' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-red-400' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-lime-600' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-amber-500' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-emerald-500' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-blue' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-slate-600' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-yellow' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-gray-900' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-zinc-700' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-stone-500' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-red-400' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-lime-600' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-amber-500' />
			</div>
			<div className='slider'>
				<div className='w-32 h-32 bg-emerald-500' />
			</div>
		</div>
	);
}
