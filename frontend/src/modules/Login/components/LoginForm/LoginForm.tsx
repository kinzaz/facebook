import { LoginInput } from '../LoginInput';
import { Form } from 'formik';
import { useState } from 'react';
import { FormButton } from '@shared/UI/buttons/FormButton';
import cn from 'classnames';
import { LoginFormProps } from './LoginForm.props';
import styles from './style.module.scss';

export const LoginForm = ({ className }: LoginFormProps): JSX.Element => {
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
			<Form className={cn(styles.form, className)}>
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
