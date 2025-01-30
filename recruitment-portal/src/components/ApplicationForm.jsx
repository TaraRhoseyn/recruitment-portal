import React, { useState } from 'react';
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
	const [currentStep, setCurrentStep] = useState(0);
	const [completedSteps, setCompletedSteps] = useState([]);
	const [formData, setFormData] = useState({
		personal: {},
		application: {},
		employment: {},
		education: {},
		diversity: {},
		language: {}
	});

	const handleStepClick = (stepIndex) => {
		if (stepIndex <= Math.max(...completedSteps, currentStep)) {
			setCurrentStep(stepIndex);
			window.scrollTo(0, 0);
		}
	};

	const handleNext = () => {
		if (currentStep < steps.length - 1) {
			// Add current step to completed steps if not already included
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
		// Add final step to completed steps
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
								className={`sw-button ${currentStep === 0
										? 'bg-[--color-grey] cursor-not-allowed'
										: 'sw-button-secondary'
									}`}
								disabled={currentStep === 0}
							>
								Previous
							</button>

							{currentStep === steps.length - 1 ? (
								<button
									type="submit"
									className="sw-button sw-button-primary"
								>
									Submit Application
								</button>
							) : (
								<button
									type="button"
									onClick={handleNext}
									className="sw-button sw-button-primary"
								>
									Next
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ApplicationForm;