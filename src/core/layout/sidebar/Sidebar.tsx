import  {useEffect, useState } from 'react';
import { CircleCheckBig, FilePlus2, LayoutDashboard, LogOut, PanelLeftOpen, PanelRightOpen, UserCheck } from 'lucide-react';
import logoMunicipalidad from '../../../assets/logo-municipalidad.svg';
import { ButtonSidebar } from './ButtonSidebar';
import { Link } from 'react-router-dom';
import { ButtonLogout } from './ButtonLogout';

export const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleResize = (e : MediaQueryListEvent) => {
            setIsMobile(e.matches);
            if (!e.matches) {
                setIsMobileMenuOpen(false);
            }
        };
        setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleResize);
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);
    
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };
    const toggleButtonSidebar = () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }
    return (
        <>
            {/* SI ESTA EL SIDEBAR ABIERTO PARA MOVIL Y LA PANTALLA SUPERA LOS 768PX TIENE QUE DESACTIVARSE EL MOBILE Y ACTIVAR EL SIDEBAR DESKTOP*/}
            <button className={`md:hidden fixed top-4 z-50 text-[#1f7ebe] transition-all duration-200 ease-in-out ${isMobileMenuOpen ? 'left-60 bg-white rounded-md p-1' : 'left-4'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <PanelRightOpen /> : <PanelLeftOpen />}
            </button>
            <div className={`
                md:flex md:flex-col justify-between h-screen bg-white transition-all duration-300 ease-in-out
              ${(isMobileMenuOpen && isMobile ) ? 'z-40 fixed top-0 left-0 w-56' : 'hidden'} 
              ${isCollapsed ? 'lg:w-20' : 'lg:w-56'}`}>
                <div className={`fixed top-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'left-20' : 'left-56'}`}>
                    <button className='hidden lg:block p-1 text-blue-600 rounded' onClick={toggleSidebar}>
                        {isCollapsed ? <PanelLeftOpen /> : <PanelRightOpen />}
                    </button>
                </div>
                <section className='flex flex-col items-center p-4'>
                    <div className='flex items-center mb-6'>
                        <img
                            src={logoMunicipalidad}
                            alt='Logo Municipalidad'
                            className='w-10 h-10'
                        />
                        <span className={`ml-2 font-bold text-blue-600 md:hidden lg:block ${isCollapsed && 'lg:hidden'}`}>
                            Municipalidad de Nuevo Chimbote
                        </span>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <Link to="/admin/registro"><ButtonSidebar titulo='Registrar Codigo' Icon={UserCheck} isCollapsed={isCollapsed} onClick={toggleButtonSidebar} /></Link>
                        <Link to="/admin/filtrar"><ButtonSidebar titulo='Registrar Licencia' Icon={FilePlus2} isCollapsed={isCollapsed} onClick={toggleButtonSidebar} /></Link>
                        <Link to="/admin/tramite"><ButtonSidebar titulo='Tramitar Licencias' Icon={CircleCheckBig} isCollapsed={isCollapsed} onClick={toggleButtonSidebar} /></Link>
                        <Link to="/admin/historial"><ButtonSidebar titulo='Historial Licencias' Icon={LayoutDashboard} isCollapsed={isCollapsed} onClick={toggleButtonSidebar} /></Link>
                    </div>
                </section>
                <section className={`flex flex-col items-center gap-4 p-4 mb-6`}>
                    <ButtonLogout titulo='Cerrar Sesión' Icon={LogOut} isCollapsed={isCollapsed} />
                </section>
            </div>
            {isMobileMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black/50 z-30 h-screen w-screen"
                    onClick={() => setIsMobileMenuOpen(false)}  
                />
            )}
        </>
    );
};