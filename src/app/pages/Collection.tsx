import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { cubicBezier, motion } from "framer-motion";
import { ItemType, items } from "./Items";
import Footer from "components/Footer";
import lightGallery from "lightgallery";
import lgMediumZoom from "lightgallery/plugins/zoom";
// Import required CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-medium-zoom.css";
import "./Collection.scss";
function Collection() {
	const { path } = useParams();
	const [currentItem, setCurrentItem] = useState<ItemType | undefined>();
	const [loading, setLoading] = useState(true);
	const galleryRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Initialize lightGallery
		if (galleryRef.current) {
			const gallery = lightGallery(galleryRef.current, {
				selector: ".gallery-item",
				plugins: [lgMediumZoom],
				speed: 1100,
				mousewheel: true,
				easing: "ease",
				download: false,
				zoom: true,
			});

			// Cleanup
			return () => {
				gallery.destroy();
			};
		}
	}, [currentItem]); // Reinitialize when images change

	useEffect(() => {
		const loadImages = async () => {
			try {
				const item = items.find((item) => item.path === path);
				if (item) {
					const loadedImages = await Promise.all(
						Object.values(item.images).map(async (importFn) => {
							const { default: src } = await importFn();
							return src;
						})
					);
					setCurrentItem({ ...item, loadedImages });
				}
			} catch (error) {
				console.error("Failed to load images:", error);
			} finally {
				setLoading(false);
			}
		};

		loadImages();
	}, [path]);

	if (loading) return <div className="pt-10 text-center">Loading...</div>;
	if (!currentItem)
		return <div className="pt-10 text-center">Item not found</div>;

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className="pt-10 text-5xl text-center uppercase">
					{currentItem.title}
				</div>
				<div className="p-8 @md:px-10 text-center max-w-screen-md mx-auto">
					{currentItem.body}
				</div>
				<div
					ref={galleryRef}
					className="p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{currentItem.loadedImages?.map((src, index) => (
						<motion.figure
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								ease: cubicBezier(0.25, 0.1, 0.25, 1),
								duration: 0.7,
								delay: index * 0.2,
							}}
						>
							<img
								src={src}
								alt={`${currentItem.title} image ${index + 1}`}
								data-src={src}
								data-lg-size="auto" // Adjust based on your image sizes
								className="gallery-item w-full h-auto object-cover max-h-[600px] hover:opacity-80 hover:scale-105 transition-all cursor-zoom-in"
							/>
						</motion.figure>
					))}
				</div>
			</motion.div>
			<Footer />
		</>
	);
}

export default Collection;
