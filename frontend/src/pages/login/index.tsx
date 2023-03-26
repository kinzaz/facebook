import { Login } from '@modules/Login';
import { Registration } from '@modules/Registration';
import { FooterLogin } from '@modules/FooterLogin';
import styles from './style.module.scss';
import { LoginPageWrapper } from './UI/LoginPageWrapper';

export const LoginPage = (): JSX.Element => {
	return (
		<>
			<LoginPageWrapper className={styles.wrapper}>
				<Registration />
				<Login />
			</LoginPageWrapper>
			<FooterLogin className={styles.footer} />
		</>
	);
};
