import { SelectsFieldWrapperProps } from './SelectsFieldWrapper.props';
import cn from 'classnames';
import { Header } from '../Header';
import styles from './style.module.scss';

export const SelectsFieldWrapper = ({
	className,
	children,
	header,
	...props
}: SelectsFieldWrapperProps): JSX.Element => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<Header title={header} />
			<div className={styles['grid-gender']}>{children}</div>
		</div>
	);
};
