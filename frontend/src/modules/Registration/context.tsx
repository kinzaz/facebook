import { createContext, useState } from 'react';
import { UserDataRegistration } from './lib/types';

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
	dateError: string;
	genderError: string;
	setDateError: React.Dispatch<React.SetStateAction<string>>;
	setGenderError: React.Dispatch<React.SetStateAction<string>>;
}

export const RegContext = createContext<IRegContext>({
	user: userInfos,
	handleRegisterChange: () => {},
	dateError: '',
	genderError: '',
	setDateError: () => {},
	setGenderError: () => {},
});

export const RegProvider = ({ children }) => {
	const [user, setUser] = useState<UserDataRegistration>(userInfos);
	const [dateError, setDateError] = useState('');
	const [genderError, setGenderError] = useState('');
	console.log(genderError);

	const handleRegisterChange = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	return (
		<RegContext.Provider
			value={{
				user,
				handleRegisterChange,
				dateError,
				genderError,
				setDateError,
				setGenderError,
			}}
		>
			{children}
		</RegContext.Provider>
	);
};
