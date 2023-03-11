import cn from 'classnames';
import styles from './FormWrapper.module.scss';
import { FormWrapperProps } from './FormWrapper.props';

export const FormWrapper = ({
	children,
	className,
}: FormWrapperProps): JSX.Element => {
	return <div className={cn(styles.wrapper, className)}>{children}</div>;
};
