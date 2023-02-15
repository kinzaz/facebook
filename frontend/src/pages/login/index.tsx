import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import cn from 'classnames';
import { LoginInput } from '../../components/inputs/logininput';
import { useState } from 'react';

const loginInfos = {
	email: '',
	password: '',
};

export const Login = (): JSX.Element => {
	const [login, setLogin] = useState(loginInfos);

	const { email, password } = login;

	const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLogin({ ...login, [name]: value });
	};

	return (
		<div className={styles.login}>
			<div className={styles.wrapper}>
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
				<div className={styles.register}></div>
			</div>
		</div>
	);
};
