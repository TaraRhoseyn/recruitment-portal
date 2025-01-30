import React from 'react';
import { Link } from 'react-router-dom';
import { VACANCIES } from '../../data/vacancies';



// VacancyCard component for the listing page
export const VacancyCard = ({ vacancy }) => {
	return (
		<div className="sw-card hover:shadow-lg transition-shadow">
			<div className="space-y-4">
				<div>
					<h3 className="sw-heading-secondary">{vacancy.title}</h3>
					<p className="text-gray-600">{vacancy.department}</p>
				</div>

				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="sw-text-blue">Location:</span>
						<span>{vacancy.location}</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="sw-text-blue">Salary:</span>
						<span>{vacancy.salary}</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="sw-text-blue">Type:</span>
						<span>{vacancy.type}</span>
					</div>
				</div>

				<div className="pt-4">
					<Link
						to={`/vacancies/${vacancy.id}`}
						className="sw-button sw-button-primary inline-block text-center"
					>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

// VacancyList component - main listing page
export const VacancyList = () => {
	return (
		<div className="sw-container py-8">
			<div className="sw-header mb-8">
				<h1 className="sw-heading-primary text-white">Current Vacancies</h1>
				<p className="mt-2 text-white text-lg">
					Join our team and help make Wales a more active nation
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{VACANCIES.map(vacancy => (
					<VacancyCard key={vacancy.id} vacancy={vacancy} />
				))}
			</div>
		</div>
	);
};

// VacancyDetails component - individual vacancy page
export const VacancyDetails = ({ id }) => {
	const vacancy = VACANCIES.find(v => v.id === parseInt(id));

	if (!vacancy) {
		return (
			<div className="sw-container py-8">
				<div className="sw-notice">
					<p className="font-semibold">Vacancy not found</p>
				</div>
			</div>
		);
	}

	return (
		<div className="sw-container py-8">
			<div className="sw-header mb-8">
				<h1 className="sw-heading-primary text-white">{vacancy.title}</h1>
				<p className="mt-2 text-white text-lg">{vacancy.department}</p>
			</div>

			<div className="sw-card space-y-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-4">
						<h2 className="sw-heading-secondary">Key Details</h2>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<span className="sw-text-blue">Location:</span>
								<span>{vacancy.location}</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="sw-text-blue">Salary:</span>
								<span>{vacancy.salary}</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="sw-text-blue">Type:</span>
								<span>{vacancy.type}</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="sw-text-blue">Closing Date:</span>
								<span>{new Date(vacancy.closingDate).toLocaleDateString()}</span>
							</div>
						</div>
					</div>

					<div className="sw-sidebar-card">
						<p className="font-semibold mb-4">Ready to Apply?</p>
						<Link
							to={`/apply/${vacancy.id}`}
							className="sw-button sw-button-primary w-full text-center"
						>
							Start Application
						</Link>
					</div>
				</div>

				<div className="space-y-4">
					<h2 className="sw-heading-secondary">About the Role</h2>
					<p>{vacancy.description}</p>
				</div>

				<div className="space-y-4">
					<h2 className="sw-heading-secondary">Key Responsibilities</h2>
					<ul className="list-disc pl-6 space-y-2">
						{vacancy.responsibilities.map((resp, index) => (
							<li key={index}>{resp}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VacancyList;