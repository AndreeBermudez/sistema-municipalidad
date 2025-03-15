import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export type ButtonLogoutProps = {
	titulo: string;
	Icon: LucideIcon;
	isCollapsed: boolean;
};

export const ButtonLogout: React.FC<ButtonLogoutProps> = ({ titulo, Icon, isCollapsed }) => {
	const navigate = useNavigate();
	return (
		<button
			className={`flex items-center justify-center ${isCollapsed ? 'justify-center' : ''} 
						bg-[#E8F2FF] text-[#1F7EBE] font-bold gap-2 w-full p-2  text-sm  rounded  transition-colors duration-300
                        hover:text-white hover:bg-[#1F7EBE]`}
			onClick={() => navigate('/login')}>
			<Icon size={18} color='currentColor' />
			<span className={`${isCollapsed ? 'lg:hidden' : 'lg:block'} md:hidden`}>{titulo}</span>
		</button>
	);
};
