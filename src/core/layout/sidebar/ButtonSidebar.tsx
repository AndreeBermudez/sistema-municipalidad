import { LucideIcon } from 'lucide-react';
import { ButtonLogoutProps } from './ButtonAdmin';

interface ButtonSidebarProps extends ButtonLogoutProps {
	titulo: string;
	Icon: LucideIcon;
	isCollapsed: boolean;
	isActive: boolean;
	onClick: () => void;
}

export const ButtonSidebar: React.FC<ButtonSidebarProps> = ({ titulo, Icon, isCollapsed, isActive, onClick }) => {
	return (
		<button
			className={`flex items-center gap-2 w-full px-6 py-3 font-medium text-sm transition-colors cursor-pointer
					 ${isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
			onClick={onClick}>
			<Icon size={18} />
			<span className={`${isCollapsed ? 'lg:hidden' : 'lg:block'} md:hidden`}>{titulo}</span>
		</button>
	);
};
