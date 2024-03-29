import { Link, LinkProps } from 'react-router-dom';
import styles from './RecoveryLink.module.scss';
import cn from 'classnames';
import { forgottenPass } from '@modules/Login/lib/constants';
export const RecoveryLink = ({
	className,
	to,
	...props
}: LinkProps): JSX.Element => {
	return (
		<Link
			to={to}
			className={cn(styles['forgot-password'], className)}
			{...props}
		>
			{forgottenPass}
		</Link>
	);
};
