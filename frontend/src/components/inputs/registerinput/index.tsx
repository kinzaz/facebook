import { ErrorMessage, useField } from 'formik';
import { RegisterInputProps } from './RegisterInput.props';
import { useMediaQuery } from 'react-responsive';
import styles from './style.module.scss';
import { ErrorField } from '../../errorField';
import { AuthInput } from '../authInput';

export const RegisterInput = ({
	bottom,
	...props
}: RegisterInputProps): JSX.Element => {
	const [field, meta] = useField(props);
	const view1 = useMediaQuery({
		query: '(min-width: 539px)',
	});
	const errorExist = meta.error && meta.touched;

	return (
		<>
			<div className={styles['register-input']}>
				<AuthInput
					className={errorExist ? styles['error-border'] : ''}
					{...field}
					{...props}
				/>
				{errorExist && <i className="error_icon"></i>}
			</div>
			{errorExist && (
				<ErrorField
					className={styles.error}
					width={view1 ? 'medium' : 'small'}
					name={props.name}
				/>
			)}
		</>
	);
};
