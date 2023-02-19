import { Formik, Form } from 'formik';
import { useState } from 'react';
import { registerValidation } from '../../../validationSchemas';
import { Blur } from '../../Blur';
import styles from './style.module.scss';
import { FormFields } from './FormFields';
import { HeaderRegistration } from './HeaderRegistration';
import { RegisterWrapper } from './RegisterWrapper';
import { UserDataRegistration } from './types';

export const RegisterForm = (): JSX.Element => {
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
	const [user, setUser] = useState<UserDataRegistration>(userInfos);
	const {
		first_name,
		last_name,
		email,
		password,
		bYear,
		bMonth,
		bDay,
		gender,
	} = user;
	const handleRegisterChange = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	return (
		<Blur>
			<RegisterWrapper className={styles.register}>
				<HeaderRegistration />
				<Formik
					enableReinitialize
					initialValues={{
						first_name,
						last_name,
						email,
						password,
						bYear,
						bMonth,
						bDay,
						gender,
					}}
					validationSchema={registerValidation}
					onSubmit={() => {
						let currentDate = new Date();
						let pickedDate = new Date(bYear, bMonth + 1, bDay);
					}}
				>
					{formik => (
						<Form className={styles.form}>
							<FormFields
								handleRegisterChange={handleRegisterChange}
								user={user}
							/>
						</Form>
					)}
				</Formik>
			</RegisterWrapper>
		</Blur>
	);
};
