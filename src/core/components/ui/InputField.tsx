interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	placeholder?: string;
	label?: string;
	className?: string;
	error?: string;
	disabled?:boolean
}

export const InputField: React.FC<InputFieldProps> = ({
	name,
	placeholder,
	label,
	className,
	error,
	disabled,
	...rest
}) => {
	return (
		<div className={`space-y-2 w-full text-sm ${className}`}>
			{label && <label className='block font-bold text-gray-700'>{label}</label>}
			<input
				name={name}
				placeholder={placeholder}
				disabled={disabled}
				className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 
						${ error ? 'border-red-500 focus:ring-red-200' 
								 : 'border-gray-300 focus:ring-blue-200'}
						${ disabled ? 'bg-gray-100' : ''}`}
				{...rest}
			/>
			{error && <span className='text-red-600 text-xs font-semibold'>{error}</span>}
		</div>
	);
};
