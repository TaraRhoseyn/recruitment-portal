import React from 'react';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';

function App() {
	return (
		<div className="min-h-screen bg-[--color-light-grey]">
			{/* Header */}
			<Header />

			{/* Main Content */}
			<main>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<ApplicationForm />
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;