import { RegisterInput } from '../RegisterInput';
import styles from './style.module.scss';

export const InitialsInputs = (): JSX.Element => {
	return (
		<div className={styles.line}>
			<RegisterInput
				type="text"
				placeholder="First name"
				name={'first_name'}
				// onChange={handleRegisterChange}
			/>
			<RegisterInput
				type="text"
				placeholder="Surname"
				name={'last_name'}
				// onChange={handleRegisterChange}
			/>
		</div>
	);
};
