import { ErrorMessage, useField } from 'formik';
import { useMediaQuery } from 'react-responsive';
import styles from './style.module.scss';
import { AuthInput } from 'components/inputs/authInput';
import { ErrorField } from 'UI/ErrorField';
import { FormInput } from 'UI/Inputs/FormInput';
import { RegisterInputProps } from './RegisterInput.props';

export const RegisterInput = ({
	...props
}: RegisterInputProps): JSX.Element => {
	const [field, meta] = useField(props);
	const errorExist = meta.error && meta.touched;

	return (
		<>
			<div className={styles['register-input']}>
				<FormInput
					className={errorExist ? styles['error-border'] : ''}
					{...field}
					{...props}
				/>
				{errorExist && <i className="error_icon"></i>}
				{errorExist && (
					<ErrorField className={styles.error} name={props.name} />
				)}
			</div>
		</>
	);
};
