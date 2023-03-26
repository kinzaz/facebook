import { ReactNode } from 'react';
import { LoginPageWrapperProps } from './LoginPageWrapper.props';
import cn from 'classnames';
import styles from './style.module.scss';

export const LoginPageWrapper = ({
	children,
	className,
	...props
}: LoginPageWrapperProps): JSX.Element => {
	return (
		<div {...props} className={cn(styles.wrap, className)}>
			{children}
		</div>
	);
};
