import { createContext, useState } from 'react';
import { UserDataRegistration } from './types';

const userInfos = {
	first_name: '',
	last_name: '',
	email: '',
	password: '',
	bYear: new Date().getFullYear(),
	bMonth: new Date().getMonth() + 1,
	bDay: new Date().getDate(),
	gender: '',
};

interface IRegContext {
	user: UserDataRegistration;
	handleRegisterChange: (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => void;
}

export const RegContext = createContext<IRegContext>({
	user: userInfos,
	handleRegisterChange: () => {},
});

export const RegProvider = ({ children }) => {
	const [user, setUser] = useState<UserDataRegistration>(userInfos);

	const handleRegisterChange = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	return (
		<RegContext.Provider value={{ user, handleRegisterChange }}>
			{children}
		</RegContext.Provider>
	);
};
