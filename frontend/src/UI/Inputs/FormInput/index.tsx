import cn from 'classnames';
import { FormInputProps } from './FormInputProps';
import styles from './FormInput.module.scss';

export const FormInput = ({
	className,
	...props
}: FormInputProps): JSX.Element => {
	return <input className={cn(className, styles.input)} {...props} />;
};
