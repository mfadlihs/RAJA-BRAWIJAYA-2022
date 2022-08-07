import style from "./style.module.css";

export default function GallerySlider({ reverse }) {
	return (
		<div
			className={`w-32 space-y-[40px] ${
				reverse ? style.slideTrackReverse : style.slideTrack
			} inline-block`}
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
