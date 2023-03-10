import { Registration } from 'modules/Registration';
import { FormInput } from 'shared/UI/inputs/FormInput';
import { Footer } from '../../shared/UI/Footer';
import { Login } from '../../modules/Login/Login';
import styles from './style.module.scss';

export const LoginPage = (): JSX.Element => {
	return (
		// <div className={styles.login}>
		<div className={styles.wrapper}>
			{/* <Registration /> */}
			<Login />
			{/* // 		<Footer /> */}
		</div>
		// </div>
	);
};
