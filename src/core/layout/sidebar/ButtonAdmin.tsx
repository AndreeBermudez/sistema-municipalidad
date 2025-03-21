import { User } from "../../../features/auth/models/types";

export type ButtonLogoutProps = {
	isCollapsed: boolean;
};

export const ButtonAdmin: React.FC<ButtonLogoutProps> = ({ isCollapsed }) => {
	const user: User = JSON.parse(localStorage.getItem('user') ?? '')
	return (
		<div className='flex items-center'>
			<span className='rounded-full h-8 w-8 flex items-center justify-center bg-blue-600 text-white'>
				{user.apellido ? (user.apellido).toUpperCase().charAt(0) : '...'}
			</span>
			{!isCollapsed && (
				<div className='ml-3 w-[160px] md:hidden lg:block'>
					<p className='text-sm font-medium text-gray-700'>{`${user.apellido}, ${user.nombre}`}</p>
					<p className='text-xs text-gray-500 truncate'>{user.email}</p>
				</div>
			)}
		</div>
	);
};
