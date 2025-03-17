import { CircleCheckBig, FilePlus2, LayoutDashboard, UserCheck } from 'lucide-react';

export const menuItems = [
	{
		titulo: 'Registrar Solicitante',
		link: '/admin/registro',
		icon: UserCheck,
		isActive: false,
	},
	{
		titulo: 'Filtrar Licencias',
		link: '/admin/filtrar',
		icon: FilePlus2,
		isActive: false,
	},
	{
		titulo: 'Tramitar Licencias',
		link: '/admin/tramite',
		icon: CircleCheckBig,
		isActive: false,
	},
	{
		titulo: 'Historial Licencias',
		link: '/admin/historial',
		icon: LayoutDashboard,
		isActive: false,
	},
];