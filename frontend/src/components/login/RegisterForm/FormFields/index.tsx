import { RegisterInput } from '../../../inputs/registerinput';
import { DateOfBirthSelect } from '../DateOfBirthSelect';
import { InfoRegistration } from '../InfoRegistration';
import { Gender } from '../Gender';
import styles from '../style.module.scss';
import { FormFieldsProps } from './FormFields.props';

export const FormFields = ({
	handleRegisterChange,
	user,
}: FormFieldsProps): JSX.Element => {
	return (
		<>
			<div className={styles.line}>
				<RegisterInput
					type="text"
					placeholder="First name"
					name={'first_name'}
					onChange={handleRegisterChange}
				/>
				<RegisterInput
					type="text"
					placeholder="Surname"
					name={'last_name'}
					onChange={handleRegisterChange}
				/>
			</div>
			<div className={styles.line}>
				<RegisterInput
					type="text"
					placeholder="Mobile number or email address"
					name={'email'}
					onChange={handleRegisterChange}
				/>
			</div>
			<div className={styles.line}>
				<RegisterInput
					type="password"
					placeholder="New password"
					name={'password'}
					onChange={handleRegisterChange}
				/>
			</div>
			<div className={styles.col}>
				<div className={styles['line-header']}>
					Date of birth <i className="info_icon"></i>
				</div>
				<DateOfBirthSelect
					bDay={user.bDay}
					bMonth={user.bMonth}
					bYear={user.bYear}
					handleRegisterChange={handleRegisterChange}
				/>
			</div>
			<div className={styles.col}>
				<div className={styles['line-header']}>Gender</div>
				<Gender handleRegisterChange={handleRegisterChange} />
			</div>
			<InfoRegistration />
			<div className={styles['btn-wrapper']}>
				<button className={`blue-btn ${styles['open-signup']}`}>Sign Up</button>
			</div>
		</>
	);
};
