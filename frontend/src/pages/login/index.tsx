import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import cn from 'classnames';

export const Login = (): JSX.Element => {
	return (
		<div className={styles.login}>
			<div className={styles.wrapper}>
				<div className={styles.wrap}>
					<div className={styles.headers}>
						<img src="../../icons/facebook.svg" alt="Facebook logo" />
						<span>
							Facebook helps you connect and share with people in your life.
						</span>
					</div>
					<div className={styles.form}>
						<div className={styles['form-wrap']}>
							<Formik
								initialValues={{ email: '', password: '' }}
								onSubmit={(values, { setSubmitting }) => {
									setTimeout(() => {
										alert(JSON.stringify(values, null, 2));
										setSubmitting(false);
									}, 400);
								}}
							>
								{formik => (
									<Form>
										<input type="text" />
										<input type="text" />
										<button type="submit" className={'blue-btn'}>
											Log in
										</button>
									</Form>
								)}
							</Formik>
							<Link to={'/forgot'} className={styles["forgot-password"]}>Forgotten password?</Link>
							<div className={styles.splitter}></div>
							<button className={cn('blue-btn', styles['open-signup'])}>
								Create Account
							</button>
						</div>
						<Link to={'/'} className={styles['sign-extra']}>
							<b>Create a page</b> for a celebrity, brand or business
						</Link>
					</div>
				</div>
				<div className={styles.register}></div>
			</div>
		</div>
	);
};
