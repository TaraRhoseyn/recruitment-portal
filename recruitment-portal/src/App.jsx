import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { VacancyList, VacancyDetails } from './components/vacancy/';
import ApplicationForm from './components/ApplicationForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				{/* Redirect root to vacancies */}
				<Route path="/" element={<Navigate to="/vacancies" replace />} />

				{/* Vacancy routes */}
				<Route path="/vacancies" element={<VacancyList />} />
				<Route path="/vacancies/:id" element={<VacancyDetails />} />

				{/* Application form route */}
				<Route path="/apply/:vacancyId" element={<ApplicationForm />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;