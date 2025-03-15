import { ButtonLogoutProps } from './ButtonLogout';

interface ButtonSidebarProps extends ButtonLogoutProps {
	onClick: () => void;
}

export const ButtonSidebar: React.FC<ButtonSidebarProps> = ({ titulo, Icon, isCollapsed, onClick }) => {
	return (
		<button
			className={`flex items-center justify-center ${isCollapsed ? 'justify-center' : ''} 
						gap-2 w-full p-2 font-medium text-sm text-[#3A4B5B] bg-white rounded hover:bg-[#E8F2FF] hover:text-[#1F7EBE] hover:font-bold transition-colors duration-300`}
			onClick={onClick}>
			<Icon size={18} color='#1f7ebe' />
			<span className={`${isCollapsed ? 'lg:hidden' : 'lg:block'} md:hidden`}>{titulo}</span>
		</button>
	);
};
