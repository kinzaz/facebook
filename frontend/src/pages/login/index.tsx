import { Registration } from 'modules/Registration';
import { FormInput } from 'UI/Inputs/FormInput';
import { Footer } from '../../components/login/Footer';
import { LoginForm } from '../../components/login/LoginForm';
import styles from './style.module.scss';

export const Login = (): JSX.Element => {
	return (
		<div className={styles.login}>
			<div className={styles.wrapper}>
				{/* <LoginForm /> */}
				{/* <RegisterForm /> */}
				<Registration />
				<Footer />
			</div>
		</div>
	);
};
