type AppProps = {
	children : React.ReactNode;
}

export const App : React.FC<AppProps> = ({ children }) => {
	return (
		<>
            {children}
        </>
	);
};
