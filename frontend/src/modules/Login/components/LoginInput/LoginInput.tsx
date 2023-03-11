import { ErrorMessage, useField } from 'formik';
import { LoginInputProps } from './LoginInput.props';
import { useMediaQuery } from 'react-responsive';
import styles from './style.module.scss';
import { FormInput } from 'shared/UI/inputs/FormInput';
import { ErrorField } from 'shared/UI/ErrorField';

export const LoginInput = ({
	bottom,
	...props
}: LoginInputProps): JSX.Element => {
	const [field, meta] = useField(props);

	const errorExist = meta.error && meta.touched;

	return (
		<div className={styles['login-input']}>
			<FormInput
				className={errorExist ? styles['error-border'] : ''}
				{...field}
				{...props}
			/>
			{errorExist && <i className="error_icon"></i>}
			{errorExist && <ErrorField className={styles.error} name={props.name} />}
		</div>
	);
};
