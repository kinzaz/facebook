import cn from 'classnames';
import { LoginInput } from './components/LoginInput';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { loginValidation } from '../../validationSchemas'; /* Перенести схему в модуль Логина */
import styles from './style.module.scss';
import { LoginHeader } from './components/LoginHeader';
import { LoginForm } from './components/LoginForm';
import { createAccount, footerForm, forgottenPass } from './lib/constants';
import { ExtraLink } from './components/ExtraLink';
import { RecoveryLink } from './components/RecoveryLink';
import { FormWrapper } from '@shared/UI/wrappers/FormWrapper';
import { Splitter } from '@shared/UI/Splitter';
import { FormButton } from '@shared/UI/buttons/FormButton';
import { LoginPageWrapper } from './UI/LoginPageWrapper';

export const Login = (): JSX.Element => {
	const loginInfos = {
		email: '',
		password: '',
	};
	const [login, setLogin] = useState(loginInfos);
	const { email, password } = login;

	return (
		<LoginPageWrapper className={styles.loginPage}>
			<LoginHeader className={styles.headers} />
			<FormWrapper className={styles.formWrapper}>
				<Formik
					enableReinitialize
					initialValues={{
						email,
						password,
					}}
					validationSchema={loginValidation}
					onSubmit={() => {}}
				>
					{formik => <LoginForm className={styles.loginForm} />}
				</Formik>
				<RecoveryLink to={'/forgot'} />
				<Splitter className={styles.splitter} />
				<FormButton
					className={styles['open-signup']}
					title={createAccount}
					fontSize={17}
				/>
				<ExtraLink to="/" />
			</FormWrapper>
		</LoginPageWrapper>
	);
};
