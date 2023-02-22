import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { Blur } from 'UI/Blur';
import { FormFields } from './components/FormFields';
import { HeaderRegistration } from './components/HeaderRegistration';
import { RegisterWrapper } from './components/RegisterWrapper';
import styles from './style.module.scss';
import { registerValidation } from './validationSchema';
import { RegContext, RegProvider } from './context';

export const Registration = (): JSX.Element => {
	const { user } = useContext(RegContext);
	return (
		<RegProvider>
			<Blur>
				<RegisterWrapper className={styles.register}>
					<HeaderRegistration />
					<Formik
						enableReinitialize
						initialValues={user}
						validationSchema={registerValidation}
						onSubmit={() => {
							let currentDate = new Date();
							let pickedDate = new Date(user.bYear, user.bMonth + 1, user.bDay);
						}}
					>
						{formik => (
							<Form className={styles.form}>
								<FormFields />
							</Form>
						)}
					</Formik>
				</RegisterWrapper>
			</Blur>
		</RegProvider>
	);
};
