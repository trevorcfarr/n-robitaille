import { arrowDownOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import Bio from "../../components/Bio";
import HomeItem from "../../components/HomeItem";
import Banner from "components/layout/Banner";
import { items } from "./Items";
import Footer from "components/Footer";
import { cubicBezier, motion } from "framer-motion";

function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-full mx-auto overflow-y-hidden">
			<Banner />
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{
					ease: cubicBezier(0.55, 0.1, 0.25, 1),
					duration: 1,
					delay: 0.1,
				}}
				className="absolute inset-0 flex flex-col items-center justify-center italic text-3xl"
			>
				<span className="animate-bounce leading-loose spacing tracking-[0.3em] text-center">
					Want to know more?
				</span>
				<IonIcon
					onClick={() => {}}
					src={arrowDownOutline}
					className="animate-bounce text-4xl"
				/>
			</motion.div>
			<Bio />
			<div className="my-10 text-4xl uppercase py-4 font-semibold z-10 w-full text-center">
				My Work
			</div>
			<div className="flex flex-col items-center justify-center w-full gap-10 pb-16">
				{items.map((item, index) => (
					<HomeItem
						key={item.title}
						title={item.title}
						subtitle={item.subtitle}
						description={item.description}
						body={item.body}
						path={item.path}
						logo={item.logo}
						images={item.images}
						index={index}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
}

export default Home;
