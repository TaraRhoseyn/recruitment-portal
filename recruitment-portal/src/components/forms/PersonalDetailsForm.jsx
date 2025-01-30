import React from 'react';

const PersonalDetailsForm = ({ data, updateData }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		updateData({ [name]: value });
	};

	return (
		<div className="space-y-6">
			<div className="border-b border-gray-200 pb-4">
				<h2 className="sw-heading-primary">Personal Details</h2>
				<p className="text-[--color-sw-blue] mt-2">
					Please provide your personal information below.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-2">
					<label htmlFor="title" className="sw-label">
						Title
					</label>
					<select
						id="title"
						name="title"
						value={data.title || ''}
						onChange={handleChange}
						className="sw-input w-full"
					>
						<option value="">Select title</option>
						<option value="Mr">Mr</option>
						<option value="Mrs">Mrs</option>
						<option value="Miss">Miss</option>
						<option value="Ms">Ms</option>
						<option value="Dr">Dr</option>
					</select>
				</div>

				<div className="space-y-2">
					<label htmlFor="first_name" className="sw-label">
						First Name
					</label>
					<input
						type="text"
						id="first_name"
						name="first_name"
						value={data.first_name || ''}
						onChange={handleChange}
						className="sw-input w-full"
						required
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="last_name" className="sw-label">
						Last Name
					</label>
					<input
						type="text"
						id="last_name"
						name="last_name"
						value={data.last_name || ''}
						onChange={handleChange}
						className="sw-input w-full"
						required
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="other_names" className="sw-label">
						Other Names
					</label>
					<input
						type="text"
						id="other_names"
						name="other_names"
						value={data.other_names || ''}
						onChange={handleChange}
						className="sw-input w-full"
					/>
				</div>
			</div>

			<div className="space-y-6">
				<h3 className="sw-heading-secondary">Contact Details</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<label htmlFor="address_line1" className="sw-label">
							Address Line 1
						</label>
						<input
							type="text"
							id="address_line1"
							name="address_line1"
							value={data.address_line1 || ''}
							onChange={handleChange}
							className="sw-input w-full"
							required
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="address_line2" className="sw-label">
							Address Line 2
						</label>
						<input
							type="text"
							id="address_line2"
							name="address_line2"
							value={data.address_line2 || ''}
							onChange={handleChange}
							className="sw-input w-full"
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="town" className="sw-label">
							Town
						</label>
						<input
							type="text"
							id="town"
							name="town"
							value={data.town || ''}
							onChange={handleChange}
							className="sw-input w-full"
							required
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="county" className="sw-label">
							County
						</label>
						<input
							type="text"
							id="county"
							name="county"
							value={data.county || ''}
							onChange={handleChange}
							className="sw-input w-full"
							required
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="post_code" className="sw-label">
							Post Code
						</label>
						<input
							type="text"
							id="post_code"
							name="post_code"
							value={data.post_code || ''}
							onChange={handleChange}
							className="sw-input w-full"
							required
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="country" className="sw-label">
							Country
						</label>
						<input
							type="text"
							id="country"
							name="country"
							value={data.country || ''}
							onChange={handleChange}
							className="sw-input w-full"
							required
						/>
					</div>
				</div>
			</div>

			<div className="space-y-6">
				<h3 className="sw-heading-secondary">Phone Numbers</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<label htmlFor="phone_mobile" className="sw-label">
							Mobile Phone
						</label>
						<input
							type="tel"
							id="phone_mobile"
							name="phone_mobile"
							value={data.phone_mobile || ''}
							onChange={handleChange}
							className="sw-input w-full"
							required
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="phone_home" className="sw-label">
							Home Phone
						</label>
						<input
							type="tel"
							id="phone_home"
							name="phone_home"
							value={data.phone_home || ''}
							onChange={handleChange}
							className="sw-input w-full"
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="phone_work" className="sw-label">
							Work Phone
						</label>
						<input
							type="tel"
							id="phone_work"
							name="phone_work"
							value={data.phone_work || ''}
							onChange={handleChange}
							className="sw-input w-full"
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="phone_other" className="sw-label">
							Other Phone
						</label>
						<input
							type="tel"
							id="phone_other"
							name="phone_other"
							value={data.phone_other || ''}
							onChange={handleChange}
							className="sw-input w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonalDetailsForm;