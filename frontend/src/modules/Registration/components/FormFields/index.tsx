import { DateOfBirthSelect } from '../SelectsFields/DateOfBirthSelect';
import { InfoRegistration } from '../InfoRegistration';
import styles from '../../style.module.scss';
import { FormFieldsProps } from './FormFields.props';
import { RegisterInput } from '../RegisterInput';
import { InitialsInputs } from '../InitialsInputs';
import { Header } from '../SelectsFields/Header';
import { SelectsFields } from '../SelectsFields';
import { FormButton } from 'UI/Buttons/FormButton';

export const FormFields = ({
	handleRegisterChange,
	user,
}: FormFieldsProps): JSX.Element => {
	return (
		<>
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
			{/* <div className={styles.col}>
				<div className={styles['line-header']}>
					Date of birth <i className="info_icon"></i>
				</div>
				<Header />
				<DateOfBirthSelect
					bDay={user.bDay}
					bMonth={user.bMonth}
					bYear={user.bYear}
					handleRegisterChange={handleRegisterChange}
				/>
			</div>
			<div className={styles.col}>
				<Header />
				<Gender handleRegisterChange={handleRegisterChange} />
			</div> */}
			<SelectsFields />
			<InfoRegistration />
			<FormButton title="Sign up" fontSize={17} />
		</>
	);
};
