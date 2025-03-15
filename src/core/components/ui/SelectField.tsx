import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    options: Option[];
    className?: string;
    label?: string;
    error?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({ 
    name, 
    options, 
    className = '', 
    label,
    error,
    ...rest 
}) => {
    return (
        <div className={`space-y-2 w-full text-sm ${className}`}>
            {label && <label className='block font-bold text-gray-700'>{label}</label>}
            <select
                name={name}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 
                        ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                {...rest}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className='h-1 w-full'>{error && <span className='text-red-600 text-xs font-semibold'>{error}</span>}</div>
        </div>
    );
};