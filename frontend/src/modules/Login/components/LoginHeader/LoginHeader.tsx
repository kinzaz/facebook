import styles from './LoginHeader.module.scss';
import { subHeaderLogin } from '../../lib/constants';

export const LoginHeader = (): JSX.Element => {
	return (
		<div className={styles.headers}>
			<img src="../../icons/facebook.svg" alt="Facebook logo" />
			<span>{subHeaderLogin}</span>
		</div>
	);
};
