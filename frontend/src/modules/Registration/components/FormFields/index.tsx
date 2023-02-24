import { InfoRegistration } from '../InfoRegistration';
import { RegisterInput } from '../RegisterInput';
import { InitialsInputs } from '../InitialsInputs';
import { SelectsFields } from '../SelectsFields';
import { FormButton } from 'UI/Buttons/FormButton';
import { FormFieldsProps } from './FormFields.props';
import styles from './style.module.scss';
import { useState } from 'react';

export const FormFields = ({
	handleRegisterChange,
}: FormFieldsProps): JSX.Element => {
	return (
		<>
			<div className={styles['input-text']}>
				<InitialsInputs />
				<RegisterInput
					type="text"
					placeholder="Mobile number or email address"
					name={'email'}
					onChange={handleRegisterChange}
				/>
				<RegisterInput
					type="password"
					placeholder="New password"
					name={'password'}
					onChange={handleRegisterChange}
				/>
			</div>
			<SelectsFields />
			<InfoRegistration />
			<FormButton title="Sign up" fontSize={17} />
		</>
	);
};
