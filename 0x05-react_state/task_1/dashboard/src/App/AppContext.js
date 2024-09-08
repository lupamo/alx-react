import React, { createContext, useContext } from 'react';

export const defaultUser = {
	email: '',
	password: '',
	isLoggedIn: false,
};

export const defaultLogout = () => {
	console.log('Default logout function');
}

const AppContext = createContext({
	user: defaultUser,
	logOut: defaultLogout,
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const [user, setUser] = React.useState(defaultUser);
	const logOut = () => {
		setUser({ ...defaultUser });
		console.log('user logged out');
	};

	return (
		<AppContext.Provider value={{ user, logOut }}>
			{children}
		</AppContext.Provider>
	);

};


export default AppContext;