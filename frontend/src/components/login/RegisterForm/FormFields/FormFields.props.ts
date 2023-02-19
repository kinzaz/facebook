import { UserDataRegistration } from '../types';

export interface FormFieldsProps {
	handleRegisterChange: (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => void;
	user: UserDataRegistration;
}
