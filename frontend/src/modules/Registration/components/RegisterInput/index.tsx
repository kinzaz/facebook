import { useField } from 'formik';
import styles from './style.module.scss';
import { ErrorField } from '@shared/UI/ErrorField';
import { FormInput } from '@shared/UI/inputs/FormInput';
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
