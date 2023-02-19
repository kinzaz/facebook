import { Footer } from '../../components/login/Footer';
import { LoginForm } from '../../components/login/LoginForm';
import { RegisterForm } from '../../components/login/RegisterForm';
import styles from './style.module.scss';

export const Login = (): JSX.Element => {
	return (
		<div className={styles.login}>
			<div className={styles.wrapper}>
				<LoginForm />
				{/* <RegisterForm /> */}
				<Footer />
			</div>
		</div>
	);
};
