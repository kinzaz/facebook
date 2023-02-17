import { Footer } from '../../components/login/Footer';
import { LoginForm } from '../../components/login/LoginForm';
import styles from './style.module.scss';

export const Login = (): JSX.Element => {
	return (
		<div className={styles.login}>
			<div className={styles.wrapper}>
				<LoginForm />
				<div className={styles.register}></div>
				<Footer />
			</div>
		</div>
	);
};
