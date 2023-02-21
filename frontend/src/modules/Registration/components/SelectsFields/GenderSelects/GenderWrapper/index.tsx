import { GenderWrapperProps } from './GenderWrapper.props';
import cn from 'classnames';
import styles from './style.module.scss';

export const GenderWrapper = ({
	className,
	children,
	...props
}: GenderWrapperProps): JSX.Element => {
	return (
		<div className={cn(styles['gender-wrapper'], className)} {...props}>
			{children}
		</div>
	);
};
