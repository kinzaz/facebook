import styles from './style.module.scss';
import { GenderProps } from './Gender.props';

export const Gender = ({ handleRegisterChange }: GenderProps): JSX.Element => {
	return (
		<div className={styles.grid}>
			<label>
				Male{' '}
				<input
					type="radio"
					name="gender"
					value={'male'}
					onChange={handleRegisterChange}
				/>
			</label>
			<label>
				Female{' '}
				<input
					type="radio"
					name="gender"
					value={'female'}
					onChange={handleRegisterChange}
				/>
			</label>
			<label>
				Custom{' '}
				<input
					type="radio"
					name="gender"
					value={'custom'}
					onChange={handleRegisterChange}
				/>
			</label>
		</div>
	);
};
