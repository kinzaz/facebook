import { PopupProps } from './Popup.props';
import styles from './Popup.module.scss';

export const Popup = ({
	children,
	position = 'center',
}: PopupProps): JSX.Element => {
	return (
		<div className={styles.overlay}>
			{position === 'center' ? (
				<div className={styles.body}>{children}</div>
			) : (
				<>{children}</>
			)}
		</div>
	);
};
