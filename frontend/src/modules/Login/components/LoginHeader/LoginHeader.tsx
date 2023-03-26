import styles from './LoginHeader.module.scss';
import { subHeaderLogin } from '@modules/Login/lib/constants';
import facebookLogo from '@assets/icons/facebook.svg';
import cn from 'classnames';
import { LoginHeaderProps } from './LoginHeader.props';

export const LoginHeader = ({
	className,
	...props
}: LoginHeaderProps): JSX.Element => {
	return (
		<div {...props} className={cn(styles.headers, className)}>
			<img src={facebookLogo} alt="Facebook logo" />
			<span>{subHeaderLogin}</span>
		</div>
	);
};
