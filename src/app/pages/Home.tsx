import { arrowDownOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import Bio from "../../components/Bio";
import HomeItem from "../../components/HomeItem";
import Banner from "components/layout/Banner";
import { items } from "./Items";
import Footer from "components/Footer";

function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-full mx-auto overflow-y-hidden">
			<Banner />
			<div className="absolute inset-0 flex flex-col items-center justify-center font-serif italic text-4xl">
				<span className="animate-bounce leading-loose spacing tracking-[0.3em] text-center">
					Want to know more?
				</span>
				<IonIcon
					onClick={() => {}}
					src={arrowDownOutline}
					className="animate-bounce text-4xl"
				/>
			</div>
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
