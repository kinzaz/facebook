import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Blur } from 'UI/Blur';
import { FormFields } from './components/FormFields';
import { HeaderRegistration } from './components/HeaderRegistration';
import { RegisterWrapper } from './components/RegisterWrapper';
import styles from './style.module.scss';
import { UserDataRegistration } from './types';
import { registerValidation } from './validationSchema';

export const Registration = (): JSX.Element => {
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
