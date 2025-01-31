import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { VACANCIES } from '../../data/vacancies';

export const VacancyDetails = () => {
	const { id } = useParams();
	console.log('Current route params:', { id });
	console.log('Vacancies data:', VACANCIES);

	const vacancy = VACANCIES.find(v => v.id === parseInt(id));
	console.log('Found vacancy:', vacancy);

	if (!vacancy) {
		return (
			<div className="sw-container py-8">
				<div className="sw-notice">
					<p className="font-semibold">
						Vacancy not found (ID: {id})
					</p>
					<Link to="/vacancies" className="text-blue-600 hover:underline">
						Return to vacancies list
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="sw-container py-8 bg-[--color-light-grey]">
			<div className="mb-8 mt-10">
				<h1 className="sw-heading-primary text-black">{vacancy.title}</h1>
				<p className="mt-2 text-black text-lg">{vacancy.department}</p>
			</div>

			<div className="sw-card space-y-8 bg-white rounded-lg shadow-lg p-8">
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
								<span className="sw-text-blue">Responsible to:</span>
								<span>{vacancy.responsibleTo}</span>
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

					<div className="space-y-4">
						<h2 className="sw-heading-secondary mb-8">Ready to apply?</h2>
						<div className="space-y-2 gap-2">
							<Link
								to={`/apply/${vacancy.id}`}
								className="sw-button sw-button-primary w-full text-center"
							>
								Start Application
							</Link>
						</div>
					</div>

				</div>
				<div className="space-y-4">
					<h2 className="sw-heading-secondary">About the Role</h2>
					<p>{vacancy.description}</p>
				</div>
				<div className="space-y-4">
					<h2 className="sw-heading-secondary">Job Purpose</h2>
					<ul className="list-disc space-y-5">
						{vacancy.jobPurpose.map((resp, index) => (
							<p key={index}>{resp}</p>
						))}
					</ul>
				</div>
				<div className="space-y-4">
					<h2 className="sw-heading-secondary">Main Duties</h2>
					<ul className="list-disc space-y-5">
						{vacancy.mainDuties.map((resp, index) => (
							<p key={index}>{resp}</p>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VacancyDetails;