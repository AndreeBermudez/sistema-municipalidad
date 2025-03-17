export type ButtonLogoutProps = {
	isCollapsed: boolean;
};

export const ButtonAdmin: React.FC<ButtonLogoutProps> = ({ isCollapsed }) => {
	return (
		<div className='flex items-center'>
			<span className='rounded-full h-8 w-8 flex items-center justify-center bg-blue-600 text-white'>A</span>
			{!isCollapsed && (
				<div className='ml-3 max-w-[160px] md:hidden lg:block'>
					<p className='text-sm font-medium text-gray-700'>Admin User</p>
					<p className='text-xs text-gray-500 truncate'>admin@municipalidad.gob</p>
				</div>
			)}
		</div>
	);
};
