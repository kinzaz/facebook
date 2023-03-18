import styles from './LoginHeader.module.scss';
import { subHeaderLogin } from '@modules/Login/lib/constants';
import facebookLogo from '@assets/icons/facebook.svg';

export const LoginHeader = (): JSX.Element => {
	return (
		<div className={styles.headers}>
			<img src={facebookLogo} alt="Facebook logo" />
			<span>{subHeaderLogin}</span>
		</div>
	);
};
