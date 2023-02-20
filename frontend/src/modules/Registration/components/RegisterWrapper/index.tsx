import cn from 'classnames';
import { RegisterWrapperProps } from './RegisterWrapper.props';
import styles from './RegisterWrapper.module.scss';

export const RegisterWrapper = ({
	children,
	className,
}: RegisterWrapperProps): JSX.Element => {
	return <div className={cn(className, styles.wrapper)}>{children}</div>;
};
