import { LoginInput } from '../LoginInput';
import { Form } from 'formik';
import { useState } from 'react';
import { FormButton } from '../../../../shared/UI/buttons/FormButton';

export const LoginForm = (): JSX.Element => {
	const loginInfos = {
		email: '',
		password: '',
	};
	const [login, setLogin] = useState(loginInfos);

	const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLogin({ ...login, [name]: value });
	};

	return (
		<>
			<Form>
				<LoginInput
					placeholder="Email address or phone number"
					name="email"
					type="text"
					onChange={handleLoginChange}
				/>
				<LoginInput
					placeholder="Password"
					name="password"
					type="password"
					onChange={handleLoginChange}
					bottom
				/>
				<FormButton title="Log in" color="blue" />
			</Form>
		</>
	);
};
