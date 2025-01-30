import React, { useState } from 'react';

const EmploymentHistoryForm = ({ data, updateData }) => {
	const [employments, setEmployments] = useState(data.employments || []);

	const addEmployment = () => {
		const newEmployment = {
			id: Date.now(),
			employer_name: '',
			position: '',
			date_from: '',
			date_to: '',
			salary: '',
			notice_period: '',
			duties: '',
			leaving_reason: '',
			is_current: false
		};

		const updatedEmployments = [...employments, newEmployment];
		setEmployments(updatedEmployments);
		updateData({ employments: updatedEmployments });
	};

	const removeEmployment = (id) => {
		const updatedEmployments = employments.filter(emp => emp.id !== id);
		setEmployments(updatedEmployments);
		updateData({ employments: updatedEmployments });
	};

	const handleEmploymentChange = (id, field, value) => {
		const updatedEmployments = employments.map(emp => {
			if (emp.id === id) {
				if (field === 'is_current' && value === true) {
					return { ...emp, [field]: value, date_to: '' };
				}
				return { ...emp, [field]: value };
			}
			return emp;
		});
		setEmployments(updatedEmployments);
		updateData({ employments: updatedEmployments });
	};

	return (
		<div className="space-y-6">
			<div className="border-b border-gray-200 pb-4">
				<h2 className="sw-heading-primary">Employment History</h2>
				<p className="text-[--color-sw-blue] mt-2">
					Please provide details of your employment history, starting with your current or most recent position.
				</p>
			</div>

			{employments.map((employment, index) => (
				<div key={employment.id} className="space-y-6 p-6 bg-[--color-light-grey] rounded-lg">
					<div className="flex justify-between items-center">
						<h3 className="sw-heading-secondary">
							Employment {index + 1}
						</h3>
						<button
							type="button"
							onClick={() => removeEmployment(employment.id)}
							className="text-[--color-sw-red] hover:text-[--color-sw-red-dark]"
						>
							Remove
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label htmlFor={`employer_name_${employment.id}`} className="sw-label">
								Employer Name
							</label>
							<input
								type="text"
								id={`employer_name_${employment.id}`}
								value={employment.employer_name}
								onChange={(e) => handleEmploymentChange(employment.id, 'employer_name', e.target.value)}
								className="sw-input w-full"
								required
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor={`position_${employment.id}`} className="sw-label">
								Position
							</label>
							<input
								type="text"
								id={`position_${employment.id}`}
								value={employment.position}
								onChange={(e) => handleEmploymentChange(employment.id, 'position', e.target.value)}
								className="sw-input w-full"
								required
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor={`date_from_${employment.id}`} className="sw-label">
								Date From
							</label>
							<input
								type="date"
								id={`date_from_${employment.id}`}
								value={employment.date_from}
								onChange={(e) => handleEmploymentChange(employment.id, 'date_from', e.target.value)}
								className="sw-input w-full"
								required
							/>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<label htmlFor={`date_to_${employment.id}`} className="sw-label">
									Date To
								</label>
								<div className="flex items-center space-x-2">
									<input
										type="checkbox"
										id={`is_current_${employment.id}`}
										checked={employment.is_current}
										onChange={(e) => handleEmploymentChange(employment.id, 'is_current', e.target.checked)}
										className="sw-checkbox"
									/>
									<label htmlFor={`is_current_${employment.id}`} className="text-sm">
										Current Position
									</label>
								</div>
							</div>
							<input
								type="date"
								id={`date_to_${employment.id}`}
								value={employment.date_to}
								onChange={(e) => handleEmploymentChange(employment.id, 'date_to', e.target.value)}
								className="sw-input w-full"
								disabled={employment.is_current}
								required={!employment.is_current}
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor={`salary_${employment.id}`} className="sw-label">
								Salary
							</label>
							<input
								type="number"
								id={`salary_${employment.id}`}
								value={employment.salary}
								onChange={(e) => handleEmploymentChange(employment.id, 'salary', e.target.value)}
								className="sw-input w-full"
								required
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor={`notice_period_${employment.id}`} className="sw-label">
								Notice Period
							</label>
							<input
								type="text"
								id={`notice_period_${employment.id}`}
								value={employment.notice_period}
								onChange={(e) => handleEmploymentChange(employment.id, 'notice_period', e.target.value)}
								className="sw-input w-full"
								required
							/>
						</div>
					</div>

					<div className="space-y-2">
						<label htmlFor={`duties_${employment.id}`} className="sw-label">
							Main Duties and Responsibilities
						</label>
						<textarea
							id={`duties_${employment.id}`}
							value={employment.duties}
							onChange={(e) => handleEmploymentChange(employment.id, 'duties', e.target.value)}
							rows={4}
							className="sw-input w-full min-h-[120px]"
							required
						/>
					</div>

					{!employment.is_current && (
						<div className="space-y-2">
							<label htmlFor={`leaving_reason_${employment.id}`} className="sw-label">
								Reason for Leaving
							</label>
							<textarea
								id={`leaving_reason_${employment.id}`}
								value={employment.leaving_reason}
								onChange={(e) => handleEmploymentChange(employment.id, 'leaving_reason', e.target.value)}
								rows={4}
								className="sw-input w-full min-h-[120px]"
								required
							/>
						</div>
					)}
				</div>
			))}

			<div className="flex justify-center">
				<button
					type="button"
					onClick={addEmployment}
					className="sw-button sw-button-secondary"
				>
					Add Employment
				</button>
			</div>
		</div>
	);
};

export default EmploymentHistoryForm;