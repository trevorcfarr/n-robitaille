import { IonIcon } from "@ionic/react";
import { cubicBezier, motion } from "framer-motion";
import {
	arrowForwardOutline,
	arrowBackOutline,
	arrowUpOutline,
} from "ionicons/icons";
import { useNavigate } from "react-router-dom";
interface HomeItemProps {
	title: string;
	subtitle: string;
	description: string;
	body: string;
	index: number;
	path: string;
	logo: string;
	images: string[];
}

function HomeItem({
	title,
	subtitle,
	description,
	index,
	path,
	logo,
}: HomeItemProps) {
	const isEven = index % 2 === 0;
	const navigate = useNavigate();

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				ease: cubicBezier(0.25, 0.1, 0.25, 1),
				duration: 0.7,
				delay: 0.4,
			}}
			className={`flex flex-col ${
				isEven ? "md:flex-row" : "md:flex-row-reverse"
			} justify-center gap-12 items-center`}
		>
			<img
				src={logo}
				alt={`${path} Logo`}
				className="aspect-[3/4] h-[400px] w-[300px] object-cover"
			/>
			<div className="flex flex-col gap-2 px-4 md:px-0 max-w-[300px] hover:scale-105 transition-all duration-300">
				<div
					className={`text-2xl md:text-4xl uppercase ${!isEven && "text-right"}`}
				>
					{title}
				</div>
				{/* <div className="w-full bg-black"></div> */}
				<hr className="bg-black text-black"></hr>
				<div className="flex flex-col">
					<div
						className={`text-md ${!isEven ? "text-right" : "text-left"} font-bold`}
					>
						{subtitle}
					</div>
					<div
						className={`text-md ${!isEven ? "text-right" : "text-left"} text-wrap`}
					>
						{description}
					</div>
				</div>
				{/* Desktop */}
				<div className="w-full">
					<div
						onClick={() => navigate(`/collections/${path}`)}
						className={`hidden md:flex my-12 flex-row gap-2 items-center ${
							!isEven ? "ml-auto" : "mr-auto"
						} cursor-pointer hover:font-bold w-fit`}
					>
						{isEven && <IonIcon src={arrowBackOutline} />}
						<div>View Collection</div>
						{!isEven && <IonIcon src={arrowForwardOutline} />}
					</div>
				</div>
				{/* Mobile */}
				<div className="w-full">
					<div
						onClick={() => navigate(`/collections/${path}`)}
						className={`md:hidden my-6 flex flex-row gap-2 items-center ${
							!isEven ? "justify-end" : "justify-start"
						} cursor-pointer hover:font-bold`}
					>
						<IonIcon src={arrowUpOutline} />
						<div>View Collection</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default HomeItem;
