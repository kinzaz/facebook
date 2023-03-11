import { ErrorMessage, useField } from 'formik';
import cn from 'classnames';
import styles from './style.module.scss';
import { ErrorFieldProps } from './errorField.props';

export const ErrorField = ({
	name,
	arrowDirection = 'top',
	width,
	titleError,
	className,
}: ErrorFieldProps): JSX.Element => {
	const [field] = useField(name);

	return (
		<>
			<div
				className={cn(className, styles.wrap, {
					[styles['wrap_small']]: width === 'small',
					[styles['wrap_medium']]: width === 'medium',
					[styles['wrap_big']]: width === 'big',
				})}
			>
				{titleError ? titleError : <ErrorMessage name={field.name} />}
				<span
					className={cn({
						[styles['arrow-top']]: arrowDirection === 'top',
						[styles['arrow-bottom']]: arrowDirection === 'bottom',
						[styles['arrow-left']]: arrowDirection === 'left',
						[styles['arrow-right']]: arrowDirection === 'right',
					})}
				/>
			</div>
		</>
	);
};
