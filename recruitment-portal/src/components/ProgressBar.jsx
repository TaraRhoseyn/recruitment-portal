import React from 'react';

const ProgressBar = ({ steps, currentStep, completedSteps, onStepClick }) => {
	// Helper function to determine if a step is clickable
	const isStepClickable = (stepIndex) => {
		return stepIndex <= Math.max(...completedSteps, currentStep);
	};

	return (
		<div className="w-full py-4 px-6 bg-white rounded-lg shadow-lg">
			<div className="max-w-4xl mx-auto">
				{/* Progress percentage */}
				<div className="mb-4">
					<span className="text-sm font-semibold text-[--color-sw-blue]">
						{Math.round((currentStep / (steps.length - 1)) * 100)}% Complete
					</span>
				</div>

				{/* Progress bar */}
				<div className="relative">
					<div className="overflow-hidden h-2 mb-4 flex rounded bg-[--color-light-grey]">
						<div
							style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
							className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[--color-sw-red]"
						/>
					</div>

					{/* Steps */}
					<div className="flex justify-between">
						{steps.map((step, index) => {
							const isClickable = isStepClickable(index);
							const isCurrent = index === currentStep;
							const isCompleted = completedSteps.includes(index);

							return (
								<div
									key={step.id}
									className={`flex flex-col items-center ${isClickable ? 'text-[--color-sw-blue]' : 'text-[--color-grey]'
										}`}
								>
									<button
										onClick={() => isClickable && onStepClick(index)}
										disabled={!isClickable}
										className={`
                      w-8 h-8 flex items-center justify-center rounded-full mb-2
                      transition-all duration-200
                      ${isClickable ? 'cursor-pointer hover:scale-110' : 'cursor-not-allowed'}
                      ${isCurrent
												? 'bg-[--color-sw-red] text-white ring-4 ring-[--color-sw-red-light]'
												: isCompleted
													? 'bg-[--color-sw-green] text-white'
													: 'bg-[--color-light-grey] text-[--color-grey]'
											}
                    `}
										aria-label={`Go to ${step.title} section`}
										title={isClickable ? `Go to ${step.title} section` : 'Complete previous sections first'}
									>
										{isCompleted ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										) : (
											index + 1
										)}
									</button>
									<span className={`text-sm font-semibold ${isClickable ? 'hover:text-[--color-sw-red] cursor-pointer' : 'cursor-not-allowed'
										}`}>
										{step.title}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;