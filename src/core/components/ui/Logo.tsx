import logoMunicipalidad from '../../../assets/logo-municipalidad.svg';

type LogoProps = {
	className?: string;
}

export const Logo:  React.FC<LogoProps> = ({ className }) => {
	return (
		<img
			src={logoMunicipalidad}
			alt='Logo Municipalidad'
			className={`w-auto h-16 ${className}`}
		/>
	);
};
