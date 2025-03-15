interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, label, className = '', ...rest }) => {
	return (
		<div className={`flex items-center ${className}`}>
			<input
				type='checkbox'
				name={name}
				className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
				id={name}
				{...rest}
			/>
			<label className='ml-2 text-sm text-gray-700' htmlFor={name}>
				{label}
			</label>
		</div>
	);
};
