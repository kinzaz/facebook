import styles from './style.module.scss';

export const HeaderRegistration = (): JSX.Element => {
	return (
		<div className={styles.header}>
			<i className="exit_icon"></i>
			<span>Sign Up</span>
			<span>it's quick and easy</span>
		</div>
	);
};
