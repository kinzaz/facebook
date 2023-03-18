import cn from 'classnames';
import { LoginInput } from './components/LoginInput';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { loginValidation } from '../../validationSchemas';  /* Перенести схему в модуль Логина */
import styles from './style.module.scss';
import { LoginHeader } from './components/LoginHeader';
import { LoginForm } from './components/LoginForm';
import { createAccount, footerForm, forgottenPass } from './lib/constants';
import { ExtraLink } from './components/ExtraLink';
import { RecoveryLink } from './components/RecoveryLink';
import { FormWrapper } from '@shared/UI/FormWrapper';
import { Splitter } from '@shared/UI/Splitter';
import { FormButton } from '@shared/UI/buttons/FormButton';

export const Login = (): JSX.Element => {
	const loginInfos = {
		email: '',
		password: '',
	};
	const [login, setLogin] = useState(loginInfos);
	const { email, password } = login;

	return (
		<div className={styles.wrap}>
			<LoginHeader />
			<div className={styles.form}>
				<FormWrapper className={styles['form-wrap']}>
					<Formik
						enableReinitialize
						initialValues={{
							email,
							password,
						}}
						validationSchema={loginValidation}
						onSubmit={() => {}}
					>
						{formik => <LoginForm />}
					</Formik>
					<RecoveryLink to={'/forgot'} />
					<Splitter className={styles.splitter} />
					<FormButton className={styles['open-signup']} title={createAccount} />
				</FormWrapper>
				<ExtraLink to='/' />
			</div>
		</div>
	);
};
