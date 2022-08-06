import style from "./style.module.css";
import { SendOutlined } from "@ant-design/icons";

export default function AdicittaCard() {
	return (
		<div className='p-2 rounded-lg bg-white '>
			<div className={`rounded-lg bg-white ${style.addicitaCard}`}>
				<div className='flex'>
					<div className='flex justify-between'>
						<div></div>
						<div>
							<SendOutlined twoToneColor='#FFFFFF' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
