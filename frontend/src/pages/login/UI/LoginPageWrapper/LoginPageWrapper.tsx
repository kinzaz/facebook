import styles from './style.module.scss';
import cn from 'classnames';

export const LoginPageWrapper = ({
	children,
	className,
	...props
}): JSX.Element => {
	return (
		<div {...props} className={cn(styles.wrapper, className)}>
			{children}
		</div>
	);
};
