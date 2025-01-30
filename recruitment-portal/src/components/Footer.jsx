import React from 'react';

function Footer() {
	return (
		<footer className="bg-white border-t border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<p className="text-center text-sm text-[--color-sw-blue]">
					© {new Date().getFullYear()} Sport Wales. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;