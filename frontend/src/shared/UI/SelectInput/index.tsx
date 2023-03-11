import { SelectInputProps } from './SelectInput.props';
import styles from './style.module.scss';

export const SelectInput = ({
	arrayValue,
	...props
}: SelectInputProps): JSX.Element => {
	return (
		<select {...props} className={styles.select}>
			{arrayValue.map((value: string | number, i: number) => (
				<option value={value} key={i}>
					{value}
				</option>
			))}
		</select>
	);
};
