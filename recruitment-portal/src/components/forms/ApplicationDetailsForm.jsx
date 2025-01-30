import React from 'react';

const ApplicationDetailsForm = ({ data, updateData }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		updateData({ [name]: value });
	};

	const vacancySources = [
		{ value: "website", label: "Sport Wales Website" },
		{ value: "indeed", label: "Indeed" },
		{ value: "linkedin", label: "LinkedIn" },
		{ value: "facebook", label: "Facebook" },
		{ value: "twitter", label: "Twitter" },
		{ value: "referral", label: "Employee Referral" },
		{ value: "job_centre", label: "Job Centre" },
		{ value: "recruitment_agency", label: "Recruitment Agency" },
		{ value: "other", label: "Other" }
	];

	return (
		<div className="space-y-6">
			<div className="border-b border-gray-200 pb-4">
				<h2 className="sw-heading-primary">Application Details</h2>
				<p className="text-[--color-sw-blue] mt-2">
					Please tell us about the position you're applying for and what interests you about joining Sport Wales.
				</p>
			</div>

			<div className="space-y-8">
				{/* Position Details */}
				<div className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label htmlFor="position_applied_for" className="sw-label">
								Position Applied For
							</label>
							<input
								type="text"
								id="position_applied_for"
								name="position_applied_for"
								value={data.position_applied_for || ''}
								onChange={handleChange}
								className="sw-input w-full"
								required
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="application_date" className="sw-label">
								Application Date
							</label>
							<input
								type="date"
								id="application_date"
								name="application_date"
								value={data.application_date || ''}
								onChange={handleChange}
								className="sw-input w-full"
								required
							/>
						</div>
					</div>
				</div>

				{/* Motivation */}
				<div className="space-y-6">
					<h3 className="sw-heading-secondary">Your Motivation</h3>

					<div className="space-y-6">
						<div className="space-y-2">
							<label htmlFor="reason_for_applying" className="sw-label">
								Why are you applying for this position?
								<span className="block text-sm text-black mt-1 sw-sub-label">
									Please outline how your knowledge, skills and experiences meet the criteria required for this role (as outlined in the Job Description and Person Specification).
								</span>
							</label>
							<textarea
								id="reason_for_applying"
								name="reason_for_applying"
								value={data.reason_for_applying || ''}
								onChange={handleChange}
								rows={4}
								className="sw-input w-full min-h-[120px]"
								required
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="attraction_reason" className="sw-label">
								What attracts you to Sport Wales?
								<span className="block text-sm text-black mt-1 sw-sub-label">
									Tell us what interests you about our organization and how you align with our values.
								</span>
							</label>
							<textarea
								id="attraction_reason"
								name="attraction_reason"
								value={data.attraction_reason || ''}
								onChange={handleChange}
								rows={4}
								className="sw-input w-full min-h-[120px]"
								required
							/>
						</div>
					</div>
				</div>

				{/* Source Information */}
				<div className="space-y-6">
					<h3 className="sw-heading-secondary">Vacancy Information</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label htmlFor="vacancy_source" className="sw-label">
								How did you hear about this vacancy?
							</label>
							<select
								id="vacancy_source"
								name="vacancy_source"
								value={data.vacancy_source || ''}
								onChange={handleChange}
								className="sw-input w-full"
								required
							>
								<option value="">Please select</option>
								{vacancySources.map(source => (
									<option key={source.value} value={source.value}>
										{source.label}
									</option>
								))}
							</select>
						</div>

						{data.vacancy_source === 'referral' && (
							<div className="space-y-2">
								<label htmlFor="referral_name" className="sw-label">
									Name of referring employee
								</label>
								<input
									type="text"
									id="referral_name"
									name="referral_name"
									value={data.referral_name || ''}
									onChange={handleChange}
									className="sw-input w-full"
									required
								/>
							</div>
						)}

						{data.vacancy_source === 'recruitment_agency' && (
							<div className="space-y-2">
								<label htmlFor="agency_name" className="sw-label">
									Name of recruitment agency
								</label>
								<input
									type="text"
									id="agency_name"
									name="agency_name"
									value={data.agency_name || ''}
									onChange={handleChange}
									className="sw-input w-full"
									required
								/>
							</div>
						)}

						{data.vacancy_source === 'other' && (
							<div className="space-y-2">
								<label htmlFor="other_source" className="sw-label">
									Please specify where you heard about this vacancy
								</label>
								<input
									type="text"
									id="other_source"
									name="other_source"
									value={data.other_source || ''}
									onChange={handleChange}
									className="sw-input w-full"
									required
								/>
							</div>
						)}
					</div>
				</div>

				{/* Additional Information */}
				<div className="space-y-4">
					<h3 className="sw-heading-secondary">Additional Information</h3>

					<div className="space-y-2">
						<label htmlFor="additional_info" className="sw-label">
							Is there anything else you would like us to know about your application?
							<span className="block text-sm text-black mt-1 sw-sub-label">
								Optional - Use this space to provide any other relevant information.
							</span>
						</label>
						<textarea
							id="additional_info"
							name="additional_info"
							value={data.additional_info || ''}
							onChange={handleChange}
							rows={4}
							className="sw-input w-full min-h-[120px]"
						/>
					</div>
				</div>

				{/* Notice Section */}
				<div className="sw-notice">
					<p className="text-sm">
						Your application will be assessed based on how well you meet the requirements outlined
						in the job description. Please ensure you have provided enough detail in your responses
						to demonstrate your suitability for the role.
					</p>
					<p className="text-sm mt-2">
						All information provided will be treated confidentially and in accordance with our
						privacy policy.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ApplicationDetailsForm;