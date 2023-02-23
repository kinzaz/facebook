import { Form, Formik } from 'formik';
import { RegContext } from 'modules/Registration/context';
import { registerValidation } from 'modules/Registration/validationSchema';
import { useContext } from 'react';
import { FormFields } from '../FormFields';
import styles from './style.module.scss';

export const FormComponent = (): JSX.Element => {
	const { user, handleRegisterChange } = useContext(RegContext);
	return (
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
					<FormFields handleRegisterChange={handleRegisterChange} />
				</Form>
			)}
		</Formik>
	);
};
