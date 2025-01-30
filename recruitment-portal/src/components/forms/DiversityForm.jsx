import React from 'react';

const DiversityForm = ({ data, updateData }) => {
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		updateData({
			[name]: type === 'checkbox' ? checked : value
		});
	};

	return (
		<div className="space-y-6">
			<div className="border-b border-gray-200 pb-4">
				<h2 className="sw-heading-primary">Diversity & Inclusion</h2>
				<p className="text-[--color-sw-blue] mt-2">
					Sport Wales is committed to promoting equality and diversity. This information helps us monitor and improve our practices.
					All information is confidential and will be used for monitoring purposes only.
				</p>
			</div>

			<div className="space-y-8">
				{/* Work Eligibility Section */}
				<div className="space-y-4">
					<h3 className="sw-heading-secondary">Work Eligibility</h3>

					<div className="space-y-4">
						<div className="space-y-2">
							<label className="sw-label block">Are you eligible to work in the UK?</label>
							<div className="space-y-2">
								<label className="sw-label inline-flex items-center">
									<input
										type="radio"
										name="eligible_to_work_uk"
										value="yes"
										checked={data.eligible_to_work_uk === 'yes'}
										onChange={handleChange}
										className="sw-checkbox mr-2"
									/>
									Yes
								</label>
								<div>
									<label className="sw-label inline-flex items-center">
										<input
											type="radio"
											name="eligible_to_work_uk"
											value="no"
											checked={data.eligible_to_work_uk === 'no'}
											onChange={handleChange}
											className="sw-checkbox mr-2"
										/>
										No
									</label>
								</div>
							</div>
						</div>

						<div className="space-y-2">
							<label className="sw-label block">Do you have any unspent criminal convictions?</label>
							<div className="space-y-2">
								<label className="sw-label inline-flex items-center">
									<input
										type="radio"
										name="criminal_convictions"
										value="yes"
										checked={data.criminal_convictions === 'yes'}
										onChange={handleChange}
										className="sw-checkbox mr-2"
									/>
									Yes
								</label>
								<div>
									<label className="sw-label inline-flex items-center">
										<input
											type="radio"
											name="criminal_convictions"
											value="no"
											checked={data.criminal_convictions === 'no'}
											onChange={handleChange}
											className="sw-checkbox mr-2"
										/>
										No
									</label>
								</div>
							</div>
						</div>

						{data.criminal_convictions === 'yes' && (
							<div className="space-y-2 mt-4">
								<label htmlFor="conviction_details" className="sw-label">
									Please provide details of your conviction(s)
								</label>
								<textarea
									id="conviction_details"
									name="conviction_details"
									value={data.conviction_details || ''}
									onChange={handleChange}
									rows={4}
									className="sw-input w-full"
									required
								/>
							</div>
						)}
					</div>
				</div>

				{/* Disability Section */}
				<div className="space-y-4">
					<h3 className="sw-heading-secondary">Disability</h3>

					<div className="space-y-4">
						<label className="sw-label">Do you consider yourself to have a disability?</label>
						<div className="space-y-2">
							<label className="sw-label inline-flex items-center">
								<input
									type="radio"
									name="disability_status"
									value="yes"
									checked={data.disability_status === 'yes'}
									onChange={handleChange}
									className="sw-checkbox mr-2"
								/>
								Yes
							</label>
							<label className="sw-label inline-flex items-center">
								<input
									type="radio"
									name="disability_status"
									value="no"
									checked={data.disability_status === 'no'}
									onChange={handleChange}
									className="sw-checkbox mr-2"
								/>
								No
							</label>
							<label className="sw-label inline-flex items-center">
								<input
									type="checkbox"
									name="prefer_not_say_disability"
									checked={data.prefer_not_say_disability || false}
									onChange={handleChange}
									className="sw-checkbox mr-2"
								/>
								Prefer not to say
							</label>
						</div>

						{data.disability_status === 'yes' && (
							<div className="space-y-2">
								<label htmlFor="disability_details" className="sw-label">
									Please provide details of any support or adjustments you may require
								</label>
								<textarea
									id="disability_details"
									name="disability_details"
									value={data.disability_details || ''}
									onChange={handleChange}
									rows={4}
									className="sw-input w-full"
									required
								/>
							</div>
						)}
					</div>
				</div>

				{/* Personal Information Section */}
				<div className="space-y-4">
					<h3 className="sw-heading-secondary">Personal Information</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label htmlFor="age_range" className="sw-label">
								Age Range
							</label>
							<select
								id="age_range"
								name="age_range"
								value={data.age_range || ''}
								onChange={handleChange}
								className="sw-input w-full"
							>
								<option value="">Select age range</option>
								<option value="16-24">16-24</option>
								<option value="25-34">25-34</option>
								<option value="35-44">35-44</option>
								<option value="45-54">45-54</option>
								<option value="55-64">55-64</option>
								<option value="65+">65+</option>
								<option value="prefer_not_say">Prefer not to say</option>
							</select>
						</div>

						<div className="space-y-2">
							<label htmlFor="gender" className="sw-label">
								Gender
							</label>
							<select
								id="gender"
								name="gender"
								value={data.gender || ''}
								onChange={handleChange}
								className="sw-input w-full"
							>
								<option value="">Select gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="non_binary">Non-binary</option>
								<option value="other">Other</option>
								<option value="prefer_not_say">Prefer not to say</option>
							</select>
						</div>

						<div className="space-y-2">
							<label className="sw-label inline-flex items-center">
								<input
									type="checkbox"
									name="gender_identity_change"
									checked={data.gender_identity_change || false}
									onChange={handleChange}
									className="sw-checkbox mr-2"
								/>
								Is your gender identity different from your sex registered at birth?
							</label>
						</div>

						<div className="space-y-2">
							<label htmlFor="sexual_orientation" className="sw-label">
								Sexual Orientation
							</label>
							<select
								id="sexual_orientation"
								name="sexual_orientation"
								value={data.sexual_orientation || ''}
								onChange={handleChange}
								className="sw-input w-full"
							>
								<option value="">Select sexual orientation</option>
								<option value="heterosexual">Heterosexual/Straight</option>
								<option value="gay">Gay</option>
								<option value="lesbian">Lesbian</option>
								<option value="bisexual">Bisexual</option>
								<option value="other">Other</option>
								<option value="prefer_not_say">Prefer not to say</option>
							</select>
						</div>

						<div className="space-y-2">
							<label htmlFor="marital_status" className="sw-label">
								Marital Status
							</label>
							<select
								id="marital_status"
								name="marital_status"
								value={data.marital_status || ''}
								onChange={handleChange}
								className="sw-input w-full"
							>
								<option value="">Select marital status</option>
								<option value="single">Single</option>
								<option value="married">Married</option>
								<option value="civil_partnership">Civil Partnership</option>
								<option value="divorced">Divorced</option>
								<option value="widowed">Widowed</option>
								<option value="prefer_not_say">Prefer not to say</option>
							</select>
						</div>

						<div className="space-y-2">
							<label htmlFor="religion_belief" className="sw-label">
								Religion or Belief
							</label>
							<select
								id="religion_belief"
								name="religion_belief"
								value={data.religion_belief || ''}
								onChange={handleChange}
								className="sw-input w-full"
							>
								<option value="">Select religion or belief</option>
								<option value="no_religion">No Religion</option>
								<option value="christian">Christian</option>
								<option value="buddhist">Buddhist</option>
								<option value="hindu">Hindu</option>
								<option value="jewish">Jewish</option>
								<option value="muslim">Muslim</option>
								<option value="sikh">Sikh</option>
								<option value="other">Other</option>
								<option value="prefer_not_say">Prefer not to say</option>
							</select>
						</div>

						{data.religion_belief === 'other' && (
							<div className="space-y-2">
								<label htmlFor="other_beliefs" className="sw-label">
									Please specify your beliefs
								</label>
								<input
									type="text"
									id="other_beliefs"
									name="other_beliefs"
									value={data.other_beliefs || ''}
									onChange={handleChange}
									className="sw-input w-full"
									required
								/>
							</div>
						)}

						<div className="space-y-2">
							<label htmlFor="ethnic_group" className="sw-label">
								Ethnic Group
							</label>
							<select
								id="ethnic_group"
								name="ethnic_group"
								value={data.ethnic_group || ''}
								onChange={handleChange}
								className="sw-input w-full"
							>
								<option value="">Select ethnic group</option>
								<option value="white_british">White - British</option>
								<option value="white_irish">White - Irish</option>
								<option value="white_other">White - Other</option>
								<option value="mixed_white_black_caribbean">Mixed - White and Black Caribbean</option>
								<option value="mixed_white_black_african">Mixed - White and Black African</option>
								<option value="mixed_white_asian">Mixed - White and Asian</option>
								<option value="mixed_other">Mixed - Other</option>
								<option value="asian_indian">Asian/Asian British - Indian</option>
								<option value="asian_pakistani">Asian/Asian British - Pakistani</option>
								<option value="asian_bangladeshi">Asian/Asian British - Bangladeshi</option>
								<option value="asian_other">Asian/Asian British - Other</option>
								<option value="black_caribbean">Black/Black British - Caribbean</option>
								<option value="black_african">Black/Black British - African</option>
								<option value="black_other">Black/Black British - Other</option>
								<option value="other">Other Ethnic Group</option>
								<option value="prefer_not_say">Prefer not to say</option>
							</select>
						</div>

						<div className="space-y-2">
							<label htmlFor="national_identity" className="sw-label">
								National Identity
							</label>
							<select
								id="national_identity"
								name="national_identity"
								value={data.national_identity || ''}
								onChange={handleChange}
								className="sw-input w-full"
							>
								<option value="">Select national identity</option>
								<option value="welsh">Welsh</option>
								<option value="english">English</option>
								<option value="scottish">Scottish</option>
								<option value="northern_irish">Northern Irish</option>
								<option value="british">British</option>
								<option value="other">Other</option>
								<option value="prefer_not_say">Prefer not to say</option>
							</select>
						</div>
					</div>

					{/* Additional Information */}
					<div className="space-y-4 mt-6">
						<h3 className="sw-heading-secondary">Additional Information</h3>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<label className="sw-label inline-flex items-center">
									<input
										type="checkbox"
										name="pregnancy_status"
										checked={data.pregnancy_status || false}
										onChange={handleChange}
										className="sw-checkbox mr-2"
									/>
									Are you pregnant or have you given birth within the last 26 weeks?
								</label>
							</div>

							<div className="space-y-2">
								<label htmlFor="caring_responsibilities" className="sw-label">
									Do you have any caring responsibilities?
								</label>
								<select
									id="caring_responsibilities"
									name="caring_responsibilities"
									value={data.caring_responsibilities || ''}
									onChange={handleChange}
									className="sw-input w-full"
								>
									<option value="">Select option</option>
									<option value="none">None</option>
									<option value="primary_carer_child">Primary carer of child/children</option>
									<option value="primary_carer_disabled_child">Primary carer of disabled child/children</option>
									<option value="primary_carer_disabled_adult">Primary carer of disabled adult</option>
									<option value="primary_carer_older_person">Primary carer of older person</option>
									<option value="secondary_carer">Secondary carer</option>
									<option value="prefer_not_say">Prefer not to say</option>
								</select>
							</div>

							<div className="space-y-2">
								<label htmlFor="driving_license_status" className="sw-label">
									Do you hold a valid driving license?
								</label>
								<select
									id="driving_license_status"
									name="driving_license_status"
									value={data.driving_license_status || ''}
									onChange={handleChange}
									className="sw-input w-full"
								>
									<option value="">Select option</option>
									<option value="full">Yes - Full License</option>
									<option value="provisional">Yes - Provisional License</option>
									<option value="no">No</option>
									<option value="prefer_not_say">Prefer not to say</option>
								</select>
							</div>

							<div className="space-y-2">
								<label className="sw-label inline-flex items-center">
									<input
										type="checkbox"
										name="student_status"
										checked={data.student_status || false}
										onChange={handleChange}
										className="sw-checkbox mr-2"
									/>
									Are you currently a student?
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiversityForm;