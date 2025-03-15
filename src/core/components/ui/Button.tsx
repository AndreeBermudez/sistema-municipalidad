interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	disabled?: boolean;
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className,disabled, ...rest }) => {
	return (
		<button
			className={`text-sm font-bold py-2 px-4 rounded flex items-center justify-center gap-2 
						${className}
						${disabled && 'opacity-50'}`}
			{...rest}>
			{children}
		</button>
	);
};
