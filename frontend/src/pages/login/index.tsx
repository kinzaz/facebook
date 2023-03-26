import { Login } from '@modules/Login';
import { Footer } from '@shared/UI/Footer';
import { Registration } from '@modules/Registration';
import { FormInput } from '@shared/UI/inputs/FormInput';
import styles from './style.module.scss';

export const LoginPage = (): JSX.Element => {
	return (
		// <div className={styles.login}>
		<div className={styles.wrapper}>
			{/* <Registration /> */}
			<Login />
			{/* <Footer /> */}
		</div>
		// </div>
	);
};
