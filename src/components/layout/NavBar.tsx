import { FC, useState } from "react";
import { Link } from "react-router-dom";
import NicoleLogo from "../../images/nicole_orange.png";

const NavBar: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-white shadow-lg sticky top-0 z-50">
			<div className="mx-auto px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link to="/" className="flex items-center">
						<img src={NicoleLogo} alt="Nicole Logo" className="w-fit h-16" />
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link to="/" className="hover:text-blue-600">
							Home
						</Link>
						<Link to="/about" className="hover:text-blue-600">
							About
						</Link>
						<Link to="/contact" className="hover:text-blue-600">
							Contact
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMenu}
							className="outline-none"
							aria-label="Toggle menu"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isOpen ? (
									<path d="M6 18L18 6M6 6l12 12" />
								) : (
									<path d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							<Link
								to="/"
								className="block px-3 py-2 rounded-md hover:bg-gray-100"
								onClick={toggleMenu}
							>
								Home
							</Link>
							<Link
								to="/about"
								className="block px-3 py-2 rounded-md hover:bg-gray-100"
								onClick={toggleMenu}
							>
								About
							</Link>
							<Link
								to="/contact"
								className="block px-3 py-2 rounded-md hover:bg-gray-100"
								onClick={toggleMenu}
							>
								Contact
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
