import React from 'react';
import { Link } from 'react-router-dom';
import { VACANCIES } from '../../data/vacancies';

// VacancyCard component for the listing page
const VacancyCard = ({ vacancy }) => {
	return (
	  <div className="sw-card hover:shadow-lg transition-shadow overflow-hidden">
		<div className="flex">
		  {/* Content Side */}
		  <div className="flex-1 space-y-4 pr-8">
			<div>
			  <h3 className="sw-heading-secondary">{vacancy.title}</h3>
			  <p className="text-gray-600">{vacancy.department}</p>
			</div>
			
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
				<span className="sw-text-blue">Type:</span>
				<span>{vacancy.type}</span>
			  </div>
			</div>
  
			<div className="pt-4">
			  <Link 
				to={`/vacancies/${vacancy.id}`}
				className="sw-button sw-button-primary inline-block text-center"
			  >
				View Details
			  </Link>
			</div>
		  </div>
  
		  {/* Image Side */}
		  <div className="relative w-48 -mr-8 -my-8">
			<div 
			  className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10"
			  style={{
				clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)'
			  }}
			/>
			<div
			  className="absolute inset-0 bg-cover bg-center"
			  style={{
				backgroundImage: `url(${vacancy.imageUrl})`,
				clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)'
			  }}
			/>
		  </div>
		</div>
	  </div>
	);
  };

// VacancyList component - main listing page
export const VacancyList = () => {
  return (
    <div className="sw-container py-8 bg-[--color-light-grey]">
      <div className="mb-8 mt-10">
        <h1 className="sw-heading-primary text-black">Current Vacancies</h1>
        <p className="mt-2 text-black text-lg">
          Join our team and help make Wales a more active nation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {VACANCIES.map(vacancy => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </div>
  );
};

export { VacancyDetails } from './VacancyDetails';