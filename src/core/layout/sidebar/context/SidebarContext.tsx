import React, { createContext, useContext, useState, useEffect } from 'react';

interface SidebarContextType {
	isCollapsed: boolean;
	isMobileMenuOpen: boolean;
	isMobile: boolean;
	setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	toggleSidebar: () => void;
	toggleButtonSidebar: () => void;
	handleMenuClick: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	const toggleButtonSidebar = () => {
		if (isMobile) {
			setIsMobileMenuOpen(false);
		}
	};

	const handleMenuClick = () => {
		if (isMobile) {
			setIsMobileMenuOpen(!isMobileMenuOpen);
		} else {
			toggleSidebar();
		}
	};

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		const handleResize = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches);
			if (!e.matches) {
				setIsMobileMenuOpen(false);
			}
		};
		setIsMobile(mediaQuery.matches);
		mediaQuery.addEventListener('change', handleResize);
		return () => mediaQuery.removeEventListener('change', handleResize);
	}, []);

	return (
		<SidebarContext.Provider
			value={{
				isCollapsed,
				isMobileMenuOpen,
				isMobile,
				setIsMobileMenuOpen,
				toggleSidebar,
				toggleButtonSidebar,
				handleMenuClick,
			}}>
			{children}
		</SidebarContext.Provider>
	);
};

export const useSidebarContext = (): SidebarContextType => {
	const context = useContext(SidebarContext);
	if (context === undefined) {
		throw new Error('useSidebarContext debe usarse dentro de un SidebarProvider');
	}
	return context;
};
