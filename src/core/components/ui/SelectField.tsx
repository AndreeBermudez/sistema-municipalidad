import React from 'react';

interface Option {
	value: string;
	label: string;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	options: Option[];
	className?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, options, className = '', ...rest }) => {
	return (
		<select
			name={name}
			className={`border border-gray-300 rounded-md px-3 py-2 w-full text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 ${className}`}
			{...rest}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};
