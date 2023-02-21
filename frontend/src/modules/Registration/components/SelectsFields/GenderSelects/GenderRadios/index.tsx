import { RadioInput } from 'UI/RadioInput';
import { GenderRadioProps } from './Gender.props';
import styles from './style.module.scss';

export const GenderRadios = ({
	handleRegisterChange,
}: GenderRadioProps): JSX.Element => {
	return (
		<div className={styles['grid-gender']}>
			<RadioInput
				title="Male"
				name="gender"
				value={'male'}
				onChange={handleRegisterChange}
			/>
			<RadioInput
				title="Female"
				name="gender"
				value={'female'}
				onChange={handleRegisterChange}
			/>
			<RadioInput
				title="Custom"
				name="gender"
				value={'custom'}
				onChange={handleRegisterChange}
			/>
		</div>
	);
};
