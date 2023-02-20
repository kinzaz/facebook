import styles from '../../style.module.scss';

export const InfoRegistration = (): JSX.Element => {
	return (
		<div className={styles.infos}>
			By clicking Sign Up, you agree to our{' '}
			<span>Terms, Data Policy &nbsp;</span>
			and <span>Cookie Policy.</span> You may receive SMS notifications from us
			and can opt out at any time.
		</div>
	);
};
