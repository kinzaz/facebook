import { HeaderProps } from './Header.props';
import styles from './style.module.scss';

export const Header = ({ title }: HeaderProps): JSX.Element => {
	return (
		<div className={styles['line-header']}>
			<span>{title}</span> <i className="info_icon" />
		</div>
	);
};
