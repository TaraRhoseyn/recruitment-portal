import React from 'react';

const LanguageSkillsForm = ({ data, updateData }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		updateData({ [name]: value });
	};

	const proficiencyLevels = [
		{ value: "none", label: "None" },
		{ value: "basic", label: "Basic" },
		{ value: "intermediate", label: "Intermediate" },
		{ value: "advanced", label: "Advanced" },
		{ value: "fluent", label: "Fluent" },
		{ value: "native", label: "Native" },
	];

	return (
		<div className="space-y-6">
			<div className="border-b border-gray-200 pb-4">
				<h2 className="sw-heading-primary">Language Skills</h2>
				<p className="text-[--color-sw-blue] mt-2">
					Please tell us about your Welsh language abilities. This helps us ensure we can serve our community effectively.
				</p>
			</div>

			<div className="space-y-8">
				<div className="bg-[--color-light-grey] p-6 rounded-lg">
					<h3 className="sw-heading-secondary mb-6">Welsh Language Skills</h3>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Welsh Speaking */}
						<div className="space-y-2">
							<label htmlFor="welsh_speaking" className="sw-label">
								Speaking
							</label>
							<select
								id="welsh_speaking"
								name="welsh_speaking"
								value={data.welsh_speaking || ''}
								onChange={handleChange}
								className="sw-input w-full"
								required
							>
								<option value="">Select proficiency</option>
								{proficiencyLevels.map(level => (
									<option key={`speaking-${level.value}`} value={level.value}>
										{level.label}
									</option>
								))}
							</select>
						</div>

						{/* Welsh Reading */}
						<div className="space-y-2">
							<label htmlFor="welsh_reading" className="sw-label">
								Reading
							</label>
							<select
								id="welsh_reading"
								name="welsh_reading"
								value={data.welsh_reading || ''}
								onChange={handleChange}
								className="sw-input w-full"
								required
							>
								<option value="">Select proficiency</option>
								{proficiencyLevels.map(level => (
									<option key={`reading-${level.value}`} value={level.value}>
										{level.label}
									</option>
								))}
							</select>
						</div>

						{/* Welsh Writing */}
						<div className="space-y-2">
							<label htmlFor="welsh_writing" className="sw-label">
								Writing
							</label>
							<select
								id="welsh_writing"
								name="welsh_writing"
								value={data.welsh_writing || ''}
								onChange={handleChange}
								className="sw-input w-full"
								required
							>
								<option value="">Select proficiency</option>
								{proficiencyLevels.map(level => (
									<option key={`writing-${level.value}`} value={level.value}>
										{level.label}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="mt-6">
						<div className="sw-notice p-4">
							<p className="text-sm">
								Sport Wales is committed to providing services in both Welsh and English.
								Your Welsh language skills will not affect your application unless specifically
								required for the role.
							</p>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<h3 className="sw-heading-secondary">Preferred Language</h3>

					<div className="space-y-2">
						<label htmlFor="preferred_language" className="sw-label">
							What is your preferred language for communication?
						</label>
						<select
							id="preferred_language"
							name="preferred_language"
							value={data.preferred_language || ''}
							onChange={handleChange}
							className="sw-input w-full"
							required
						>
							<option value="">Select preferred language</option>
							<option value="welsh">Welsh</option>
							<option value="english">English</option>
							<option value="both">Both Welsh and English</option>
						</select>
					</div>

					<div className="sw-notice mt-4">
						<p className="text-sm">
							This preference will be used for:
						</p>
						<ul className="list-disc ml-6 mt-2 text-sm">
							<li>Communication regarding your application</li>
							<li>Interview arrangements</li>
							<li>Future correspondence if your application is successful</li>
						</ul>
					</div>
				</div>

				{/* Additional Welsh Language Qualifications */}
				<div className="space-y-4">
					<h3 className="sw-heading-secondary">Welsh Language Qualifications</h3>

					<div className="space-y-2">
						<label htmlFor="welsh_qualifications" className="sw-label">
							Do you have any Welsh language qualifications?
							<span className="text-sm text-[--color-sw-blue] block mt-1">
								(Optional - please include in your Education section if relevant to the role)
							</span>
						</label>
						<select
							id="welsh_qualifications"
							name="welsh_qualifications"
							value={data.welsh_qualifications || ''}
							onChange={handleChange}
							className="sw-input w-full"
						>
							<option value="">Select answer</option>
							<option value="gcse">GCSE Welsh</option>
							<option value="a_level">A-Level Welsh</option>
							<option value="degree">Degree involving Welsh</option>
							<option value="other">Other qualification</option>
							<option value="none">No formal qualifications</option>
						</select>
					</div>

					{data.welsh_qualifications === 'other' && (
						<div className="space-y-2">
							<label htmlFor="other_welsh_qualifications" className="sw-label">
								Please specify your Welsh language qualification
							</label>
							<input
								type="text"
								id="other_welsh_qualifications"
								name="other_welsh_qualifications"
								value={data.other_welsh_qualifications || ''}
								onChange={handleChange}
								className="sw-input w-full"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default LanguageSkillsForm;