import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className="bg-white border-b border-gray-200">
			<div className="mx-auto px-4 sm:px-6 lg:px-1">
				<div className="flex px-10 justify-between h-16">
					{/* Logo and Title Section */}
					<div className="flex items-stretch space-x-8">
						<Link
							to="/vacancies"
							className="flex-shrink-0 flex items-center space-x-3 hover:opacity-80 transition-opacity"
						>
							<div className="flex flex-col">
								<span className="text-lg font-semibold text-[--color-sw-blue]">
									Sport Wales
								</span>
								<span className="text-xs text-gray-500">
									Recruitment Portal
								</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;