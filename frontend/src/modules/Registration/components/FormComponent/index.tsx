import { Form, Formik } from 'formik';
import { DATE_ERRORS, GENDER_ERRORS } from '@modules/Registration/lib/constants';
import { RegContext } from '@modules/Registration/context';
import { registerValidation } from '@modules/Registration/lib/validationSchema';
import { useContext, useState } from 'react';
import { FormFields } from '../FormFields';
import styles from './style.module.scss';
import { useValidateDate } from './useValidateDate';

export const FormComponent = (): JSX.Element => {
	const { user, handleRegisterChange, setDateError, setGenderError } =
		useContext(RegContext);
	const minAge = 14;
	const maxAge = 70;
	const { lessMinimum, moreMaximum } = useValidateDate(user, minAge, maxAge);

	return (
		<Formik
			enableReinitialize
			initialValues={user}
			validationSchema={registerValidation}
			onSubmit={() => {
				if (lessMinimum) {
					setDateError(DATE_ERRORS.LESS(minAge));
				} else if (moreMaximum) {
					setDateError(DATE_ERRORS.MORE(maxAge));
				} else if (user.gender === '') {
					setDateError('');
					setGenderError(GENDER_ERRORS.ABSENT_GENDER);
				} else {
					setDateError('');
					setGenderError('');
				}
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
