import { RegContext } from 'modules/Registration/context';
import { useContext } from 'react';
import { RegisterInput } from '../RegisterInput';
import styles from './style.module.scss';

export const InitialsInputs = (): JSX.Element => {
	const { handleRegisterChange } = useContext(RegContext);
	return (
		<div className={styles.initials}>
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
	);
};
