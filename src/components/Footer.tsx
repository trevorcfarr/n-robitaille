import NicoleText from "../images/nicole_text.png";
import { cubicBezier, motion } from "framer-motion";

function Footer() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: cubicBezier(0.25, 0.1, 0.25, 1),
				duration: 0.7,
				delay: 0.4,
			}}
			className="w-full bg-black"
		>
			<div className="flex py-8 flex-col sm:flex-row gap-8 items-center justify-center">
				<img src={NicoleText} alt="Nicole Text" className="h-20 sm:h-32" />
				<div className="flex flex-col items-center justify-center text-center text-white">
					<div>Nicole Robitaille</div>
					<div>ahoy.nicole.robitaille@gmail.com</div>
					<div>208.691.2670</div>
					<div>Coeur d'Alene, ID</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Footer;
