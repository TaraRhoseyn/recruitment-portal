import React, { useState } from 'react';

const EducationForm = ({ data, updateData }) => {
	const [qualifications, setQualifications] = useState(data.qualifications || []);
	const [otherQualifications, setOtherQualifications] = useState(data.other_qualifications || '');

	const addQualification = () => {
		const newQualification = {
			id: Date.now(),
			qualification: '',
			subject: '',
			grade: '',
			date_attained: ''
		};

		const updatedQualifications = [...qualifications, newQualification];
		setQualifications(updatedQualifications);
		updateData({ qualifications: updatedQualifications, other_qualifications: otherQualifications });
	};

	const removeQualification = (id) => {
		const updatedQualifications = qualifications.filter(qual => qual.id !== id);
		setQualifications(updatedQualifications);
		updateData({ qualifications: updatedQualifications, other_qualifications: otherQualifications });
	};

	const handleQualificationChange = (id, field, value) => {
		const updatedQualifications = qualifications.map(qual => {
			if (qual.id === id) {
				return { ...qual, [field]: value };
			}
			return qual;
		});
		setQualifications(updatedQualifications);
		updateData({ qualifications: updatedQualifications, other_qualifications: otherQualifications });
	};

	const handleOtherQualifications = (value) => {
		setOtherQualifications(value);
		updateData({ qualifications, other_qualifications: value });
	};

	return (
		<div className="space-y-6">
			<div className="border-b border-gray-200 pb-4">
				<h2 className="sw-heading-primary">Education & Qualifications</h2>
				<p className="text-[--color-sw-blue] mt-2">
					Please provide details of your educational qualifications.
				</p>
			</div>

			{qualifications.map((qualification, index) => (
				<div key={qualification.id} className="space-y-6 p-6 bg-[--color-light-grey] rounded-lg">
					<div className="flex justify-between items-center">
						<h3 className="sw-heading-secondary">
							Qualification {index + 1}
						</h3>
						<button
							type="button"
							onClick={() => removeQualification(qualification.id)}
							className="text-[--color-sw-red] hover:text-[--color-sw-red-dark]"
						>
							Remove
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label htmlFor={`qualification_${qualification.id}`} className="sw-label">
								Qualification Type
							</label>
							<select
								id={`qualification_${qualification.id}`}
								value={qualification.qualification}
								onChange={(e) => handleQualificationChange(qualification.id, 'qualification', e.target.value)}
								className="sw-input w-full"
								required
							>
								<option value="">Select qualification</option>
								<option value="GCSE">GCSE</option>
								<option value="A-Level">A-Level</option>
								<option value="BTEC">BTEC</option>
								<option value="HNC">HNC</option>
								<option value="HND">HND</option>
								<option value="Degree">Degree</option>
								<option value="Masters">Masters</option>
								<option value="PhD">PhD</option>
								<option value="Other">Other</option>
							</select>
						</div>

						<div className="space-y-2">
							<label htmlFor={`subject_${qualification.id}`} className="sw-label">
								Subject
							</label>
							<input
								type="text"
								id={`subject_${qualification.id}`}
								value={qualification.subject}
								onChange={(e) => handleQualificationChange(qualification.id, 'subject', e.target.value)}
								className="sw-input w-full"
								required
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor={`grade_${qualification.id}`} className="sw-label">
								Grade/Result
							</label>
							<input
								type="text"
								id={`grade_${qualification.id}`}
								value={qualification.grade}
								onChange={(e) => handleQualificationChange(qualification.id, 'grade', e.target.value)}
								className="sw-input w-full"
								required
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor={`date_attained_${qualification.id}`} className="sw-label">
								Date Attained
							</label>
							<input
								type="date"
								id={`date_attained_${qualification.id}`}
								value={qualification.date_attained}
								onChange={(e) => handleQualificationChange(qualification.id, 'date_attained', e.target.value)}
								className="sw-input w-full"
								required
							/>
						</div>
					</div>
				</div>
			))}

			<div className="flex justify-center mb-6">
				<button
					type="button"
					onClick={addQualification}
					className="sw-button sw-button-secondary"
				>
					Add Qualification
				</button>
			</div>

			<div className="space-y-2">
				<label htmlFor="other_qualifications" className="sw-label">
					Other Qualifications, Training & Professional Memberships
				</label>
				<p className="text-sm text-[--color-sw-blue]">
					Please include any other relevant qualifications, training courses completed, or professional memberships.
				</p>
				<textarea
					id="other_qualifications"
					value={otherQualifications}
					onChange={(e) => handleOtherQualifications(e.target.value)}
					rows={6}
					className="sw-input w-full min-h-[150px]"
				/>
			</div>
		</div>
	);
};

export default EducationForm;