import { RadioInputProps } from './RadioInput.props';
import styles from './style.module.scss';

export const RadioInput = ({
	title,
	...props
}: RadioInputProps): JSX.Element => {
	return (
		<label className={styles.label}>
			<span>{title}</span>
			<input
				type="radio"
				{...props}
			/>
		</label>
	);
};
