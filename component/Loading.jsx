import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
	return (
		<div className='fixed z-50 h-screen w-full bg-[#033E50aa] flex justify-center items-center'>
			<motion.div
				transition={{
					duration: 2,
					repeat: Infinity,
				}}
				animate={{
					rotate: 360,
				}}
				className='w-10'
			>
				<Image
					src={"/assets/icons/loading.svg"}
					layout='responsive'
					width={1}
					height={1}
				/>
			</motion.div>
		</div>
	);
}
