import { ErrorMessage, useField } from 'formik';
import { LoginInputProps } from './LoginInput.props';
import { useMediaQuery } from 'react-responsive';
import styles from './style.module.scss';

export const LoginInput = ({
	bottom,
	...props
}: LoginInputProps): JSX.Element => {
	const [field, meta] = useField(props);
	const desktopView = useMediaQuery({
		query: '(min-width: 850px)',
	});
	return (
		<div className={styles.wrap}>
			{meta.touched && meta.error && !bottom && (
				<>
					<div
						className={
							desktopView
								? ` ${styles['input-error']} ${styles['input-error-desktop']}`
								: styles['input-error']
						}
					>
						<ErrorMessage name={field.name} />
					</div>
					<div
						className={desktopView ? styles['error-left'] : styles['error-top']}
					></div>
				</>
			)}
			<div>
				<input
					className={meta.error && meta.touched ? styles['error-border'] : ''}
					{...field}
					{...props}
				/>
				{meta.error && meta.touched && <i className="error_icon"></i>}
			</div>
			{meta.touched && meta.error && bottom && (
				<>
					<div
						className={
							desktopView
								? ` ${styles['input-error']} ${styles['input-error-desktop']}`
								: styles['input-error']
						}
					>
						<ErrorMessage name={field.name} />
					</div>
					<div
						className={
							desktopView ? styles['error-left'] : styles['error-bottom']
						}
					></div>
				</>
			)}
		</div>
	);
};
