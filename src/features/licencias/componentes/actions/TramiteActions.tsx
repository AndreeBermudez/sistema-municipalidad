import { ColumnActions } from '../../../../core/components/common/table';
import { Button } from '../../../../core/components/ui';

interface TramiteActionsProps {
	estado: 'Pendiente' | 'Vigente';
	openModal?: () => void;
	download?: () => void;
}

const estadoConfig = {
	Pendiente: {
		label: 'Completar',
		classname: 'bg-[#DBEAFE] text-[#1E3A8A] shadow-md px-[10px] py-[5px]',
		onClick: 'openModal',
	},
	Vigente: {
		label: 'Descargar',
		classname: 'bg-[#DCFCE7] text-[#16A34A] shadow-md px-[10px] py-[5px]',
		onClick: 'dowload',
	},
} as const;

export const TramiteActions = ({ estado, openModal, download }: TramiteActionsProps) => {
	const config = estadoConfig[estado];
	return (
		<ColumnActions>
			<Button
				className={config.classname}
				onClick={config.onClick === 'dowload' ? download : openModal}>
				{config.label}
			</Button>
		</ColumnActions>
	);
};
