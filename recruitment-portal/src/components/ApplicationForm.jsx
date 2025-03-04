import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VACANCIES } from '../data/vacancies';
import ProgressBar from './ProgressBar';
import PersonalDetailsForm from './forms/PersonalDetailsForm';
import EmploymentHistoryForm from './forms/EmploymentHistoryForm';
import EducationForm from './forms/EducationForm';
import DiversityForm from './forms/DiversityForm';
import LanguageSkillsForm from './forms/LanguageSkillsForm';
import ApplicationDetailsForm from './forms/ApplicationDetailsForm';

const steps = [
	{ id: 'personal', title: 'Personal Details' },
	{ id: 'application', title: 'Application' },
	{ id: 'employment', title: 'Employment' },
	{ id: 'education', title: 'Education' },
	{ id: 'diversity', title: 'Diversity' },
	{ id: 'language', title: 'Language Skills' },
];

const ApplicationForm = () => {
	const { vacancyId } = useParams();
	const navigate = useNavigate();
	const vacancy = VACANCIES.find(v => v.id === parseInt(vacancyId));

	const [currentStep, setCurrentStep] = useState(0);
	const [completedSteps, setCompletedSteps] = useState([]);
	const [formData, setFormData] = useState({
		personal: {},
		application: {
			vacancyId: vacancyId,
			positionAppliedFor: vacancy?.title || ''
		},
		employment: {},
		education: {},
		diversity: {},
		language: {}
	});

	// Redirect if vacancy not found
	if (!vacancy) {
		return (
			<div className="sw-container py-8">
				<div className="sw-notice">
					<p className="font-semibold">Vacancy not found</p>
					<button
						onClick={() => navigate('/vacancies')}
						className="text-blue-600 hover:underline"
					>
						Return to vacancies list
					</button>
				</div>
			</div>
		);
	}

	const handleStepClick = (stepIndex) => {
		if (stepIndex <= Math.max(...completedSteps, currentStep)) {
			setCurrentStep(stepIndex);
			window.scrollTo(0, 0);
		}
	};

	const handleNext = () => {
		if (currentStep < steps.length - 1) {
			if (!completedSteps.includes(currentStep)) {
				setCompletedSteps(prev => [...prev, currentStep].sort((a, b) => a - b));
			}
			setCurrentStep(prev => prev + 1);
			window.scrollTo(0, 0);
		}
	};

	const handlePrevious = () => {
		if (currentStep > 0) {
			setCurrentStep(prev => prev - 1);
			window.scrollTo(0, 0);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!completedSteps.includes(currentStep)) {
			setCompletedSteps(prev => [...prev, currentStep].sort((a, b) => a - b));
		}
		// TODO: Add API submission logic
		console.log('Form submitted:', formData);
	};

	const updateFormData = (section, data) => {
		setFormData(prev => ({
			...prev,
			[section]: { ...prev[section], ...data }
		}));
	};

	const renderForm = () => {
		switch (steps[currentStep].id) {
			case 'personal':
				return (
					<PersonalDetailsForm
						data={formData.personal}
						updateData={(data) => updateFormData('personal', data)}
					/>
				);
			case 'application':
				return (
					<ApplicationDetailsForm
						data={formData.application}
						updateData={(data) => updateFormData('application', data)}
						vacancy={vacancy}
					/>
				);
			case 'employment':
				return (
					<EmploymentHistoryForm
						data={formData.employment}
						updateData={(data) => updateFormData('employment', data)}
					/>
				);
			case 'education':
				return (
					<EducationForm
						data={formData.education}
						updateData={(data) => updateFormData('education', data)}
					/>
				);
			case 'diversity':
				return (
					<DiversityForm
						data={formData.diversity}
						updateData={(data) => updateFormData('diversity', data)}
					/>
				);
			case 'language':
				return (
					<LanguageSkillsForm
						data={formData.language}
						updateData={(data) => updateFormData('language', data)}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen bg-[--color-light-grey]">
			<div className="sw-container py-8">
				<div className="mb-8 mt-10">
					<h1 className="sw-heading-primary text-black">Application Form</h1>
					<p className="mt-2 text-black text-lg">
						Applying for: {vacancy.title}
					</p>
				</div>

				<ProgressBar
					steps={steps}
					currentStep={currentStep}
					completedSteps={completedSteps}
					onStepClick={handleStepClick}
				/>

				<div className="min-h-screen mx-auto py-6">
					<div className="bg-white rounded-lg shadow-lg p-8">
						<form onSubmit={handleSubmit}>
							{renderForm()}

							<div className="flex justify-between mt-8">
								<button
									type="button"
									onClick={handlePrevious}
									className={`${currentStep === 0
											? 'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-[--color-grey] text-black cursor-not-allowed'
											: 'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
										}`}
									disabled={currentStep === 0}
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
									Previous
								</button>

								{currentStep === steps.length - 1 ? (
									<div>
										<button type="button" disabled="" className="
											inline-flex items-center px-4 py-2 rounded-md 
											text-sm font-medium transition-colors duration-200 
											bg-gray-100 text-gray-700 mr-3
										">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save w-4 h-4 mr-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
											Save Draft
										</button>
										<button
											type="submit"
											className="sw-button sw-button-primary"
										>
											Submit Application
										</button>
									</div>
								) : (
									<div className="flex items-center">
										<button type="button" disabled="" className="
											inline-flex items-center px-6 py-2 rounded-md 
											text-sm font-medium transition-colors duration-200 
											bg-gray-100 text-gray-700 mr-3
										">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-save w-4 h-4 mr-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
											Save Draft
										</button>
										<button
											type="button"
											onClick={handleNext}
											className="inline-flex items-center px-6 py-2 rounded-md 
												text-sm font-medium transition-colors duration-200 
												bg-sw-red text-white hover:bg-opacity-90"
										>
											Next
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-4 h-4 ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
										</button>
									</div>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplicationForm;