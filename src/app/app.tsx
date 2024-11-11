import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// You might want to create these components later
import Navbar from "../components/layout/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Collection from "./pages/Collection";
const App: FC = () => {
	return (
		<Router>
			<div className="min-h-screen flex flex-col w-full overflow-x-hidden">
				<Navbar />
				<main className="flex-grow w-full">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/collections/:path" element={<Collection />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
};

export default App;
