import { useField } from 'formik';
import { LoginInputProps } from './LoginInput.props';
import styles from './style.module.scss';

export const LoginInput = ({ ...props }: LoginInputProps): JSX.Element => {
	const [field] = useField(props);

	return (
		<div className={styles.wrap}>
			<input
				{...field}
				{...props}
			/>
		</div>
	);
};
