import cn from 'classnames';
import { LoginInput } from '../../components/inputs/logininput';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

const loginInfos = {
	email: '',
	password: '',
};

export const LoginForm = (): JSX.Element => {
	const [login, setLogin] = useState(loginInfos);
	const { email, password } = login;

	const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLogin({ ...login, [name]: value });
	};

	const loginValidation = Yup.object({
		email: Yup.string()
			.email('Must be an email address')
			.required('Email address is required'),
		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters')
			.max(20, 'Password must be no longer 20 characters'),
	});
	return (
		<div className={styles.wrap}>
			<div className={styles.headers}>
				<img src="../../icons/facebook.svg" alt="Facebook logo" />
				<span>
					Facebook helps you connect and share with people in your life.
				</span>
			</div>
			<div className={styles.form}>
				<div className={styles['form-wrap']}>
					<Formik
						enableReinitialize
						initialValues={{
							email,
							password,
						}}
						validationSchema={loginValidation}
						onSubmit={() => {}}
					>
						{formik => (
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
								<button type="submit" className={'blue-btn'}>
									Log in
								</button>
							</Form>
						)}
					</Formik>
					<Link to={'/forgot'} className={styles['forgot-password']}>
						Forgotten password?
					</Link>
					<div className={styles.splitter}></div>
					<button className={cn('blue-btn', styles['open-signup'])}>
						Create Account
					</button>
				</div>
				<Link to={'/'} className={styles['sign-extra']}>
					<b>Create a page</b> for a celebrity, brand or business
				</Link>
			</div>
		</div>
	);
};
